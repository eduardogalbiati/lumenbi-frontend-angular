app.controller('VendasController',['$scope','VendasService', '$q', '$timeout', function( $scope , VendasService, $q, $timeout) {



    $scope.getLabel = function(mes)
    {
        if($scope.parametros.mes == mes){
            return '<span class="badge bg-danger">'+$scope.parametros.meses[(mes-1)]+'</span>';
        }else{
            //return '<a ng-click="parametros.mes = '+mes+'">'+$scope.parametros.meses[(mes-1)];
            return $scope.parametros.meses[(mes-1)];
        }
    }

    $scope.mesAtual = new Date;
    $scope.mesAtual = $scope.mesAtual.getMonth()+1

    $scope.parametros = {
        mes : '2',
        mesDesc : '2 - Fevereiro',
        ano : '2016',
        anoComparativo: '2015',
        tipo : 'Mensal',
        anos : [],
        meses: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
    };

    $scope.filters = {
        sortType     : 'pos', 
        sortReverse  : false,  
        searchTerm   : ''
    }

    $scope.data;
    $scope.pageSize = 10;
    $scope.currentPage = 0;

    $scope.$watchGroup(['parametros.ano', 'parametros.mes', 'parametros.tipo'], function() {
       // $scope.parametros.mesDesc = $scope.parametros.meses[($scope.parametros.mes-1)] + ' ' +$scope.parametros.mes+'/'+$scope.parametros.ano;
        //$scope.loadCurvaAbc();
       // $scope.loadCurvaAbcHead();
       $scope.loadVendas();
    });
   
    $scope.loadVendas = function()
    {
        if($scope.parametros.tipo == 'Mensal'){
            VendasService.getVendas($scope.parametros.mes, $scope.parametros.ano, $scope.parametros.tipo).then(function(data) {
                $scope.data = data;
            });
             VendasService.getVendas($scope.parametros.mes, $scope.parametros.anoComparativo, $scope.parametros.tipo).then(function(data) {
                $scope.dataComparativo = data;
            });
        }
    }



  

/*
    $scope.toggleTotal = function()
    {
        //$scope.loadCurvaAbcHead();
        if($scope.curvaAbcHeadFilter.exibeTotal == ''){
            $scope.curvaAbcHeadFilter.exibeTotal = $scope.curvaAbcHeadFilter.data;
            $scope.curvaAbcHeadFilter.exibeVirgula = ',';
        }else{
            $scope.curvaAbcHeadFilter.exibeTotal = '';
            $scope.curvaAbcHeadFilter.exibeVirgula = '';
        }
    }
   
   
    $scope.loadCurvaAbc = function()
    {
        ClientesService.getCurvaAbc($scope.parametros.mes, $scope.parametros.ano, $scope.parametros.interval).then(function(data) {
            $scope.abcData = data;
        });
    }

     $scope.loadCurvaAbcHead = function()
    {
        ClientesService.getCurvaAbcHead($scope.mesAtual, $scope.parametros.ano, '1').then(function(data) {
            $scope.curvaAbcHead = data;
            if($scope.iswitch.total == true){
                $scope.curvaAbcHeadFilter.data = { data: $scope.curvaAbcHead.resumo.valorTotal, label: 'Total' , points: { show: true, radius: 6}, splines: { show: true, tension: 0.45, lineWidth: 5, fill: 0 } };
                $scope.curvaAbcHeadFilter.exibeTotal = $scope.curvaAbcHeadFilter.data 
                $scope.curvaAbcHeadFilter.exibeVirgula = ',' 
            }else{
                $scope.curvaAbcHeadFilter.data = ''
                $scope.curvaAbcHeadFilter.exibeTotal = ''
                $scope.curvaAbcHeadFilter.exibeVirgula = '' 
            }

        });
    }
 */

    $scope.loadVendas();

}]);


