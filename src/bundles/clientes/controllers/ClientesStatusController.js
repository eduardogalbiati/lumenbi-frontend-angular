app.controller('ClientesStatusController',['$scope','ClientesService', '$q', '$timeout', function( $scope , ClientesService, $q, $timeout) {

    $scope.mesAtual = new Date;
    $scope.mesAtual = $scope.mesAtual.getMonth()+1

    $scope.getLabel = function(mes)
    {
        if($scope.parametros.mes == mes){
            return '<span class="badge bg-danger">'+$scope.parametros.meses[(mes-1)].substring(0,3) +'</span>';
        }else{
            //return '<a ng-click="parametros.mes = '+mes+'">'+$scope.parametros.meses[(mes-1)];
            return $scope.parametros.meses[(mes-1)].substring(0,3);
        }
    }

    $scope.parametros = {
        mes : '6',
        mesDesc : 'Março',
        mesIntervalo : '3',
        mesIntervaloDesc : '3 Mêses',
        anos : [],
        ano : '2015',
        anoComparativo: '2014',
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
        mesesIntervalos: [
            '1 Mes',
            '2 Meses',
            '3 Meses',
            '4 Meses',
            '5 Meses',
            '6 Meses',
            '7 Meses',
            '8 Meses',
            '9 Meses',
            '10 Meses',
            '11 Meses',
            '12 Meses'
        ],
       
    };

    $scope.filters = {
        sortType     : 'pos', 
        sortReverse  : false,  
        searchTerm   : '',
   
    }

    $scope.clientesPositivos;
    $scope.clientesNegativos;
    $scope.clientesRecuperados;
    $scope.clientesNovos;
    $scope.clientesRegulares;
    $scope.clientesComparativoHead;
    $scope.clientesComparativo;
    $scope.clientesComparativoHeadAnoPassado

    $scope.pageSize = 10;
    $scope.currentPage = 0;

    $scope.$watchGroup(['parametros.ano', 'parametros.mes', 'parametros.mesIntervalo','parametros.anoComparativo'], function() {
        $scope.getClientesComparativoHeadAnoPassado();
        $scope.getClientesPositivos();
        $scope.getClientesRegulares();
        $scope.getClientesNegativos();
        $scope.getClientesRecuperados();
        $scope.getClientesNovos();
        $scope.getClientesComparativo();
        $scope.getClientesComparativoHead();


    });

    

    $scope.getClientesPositivos = function()
    {
       ClientesService.loadClientesPositivos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesPositivos = data;

        });
    }
    $scope.getClientesRegulares = function()
    {
       ClientesService.loadClientesRegulares($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesRegulares = data;

        });
    }
    $scope.getClientesNegativos = function()
    {
       ClientesService.loadClientesNegativos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesNegativos = data;

        });
    }
    $scope.getClientesRecuperados = function()
    {
       ClientesService.loadClientesRecuperados($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesRecuperados = data;

        });
    }
    $scope.getClientesNovos = function()
    {
       ClientesService.loadClientesNovos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesNovos = data;

        });
    }

    $scope.getClientesComparativoHead = function()
    {
       ClientesService.loadClientesComparativoHead($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesComparativoHead = data;

        });
    }

    $scope.getClientesComparativoHeadAnoPassado = function()
    {
       ClientesService.loadClientesComparativoHead('12',$scope.parametros.anoComparativo,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesComparativoHeadAnoPassado = data;

        });
    }

    $scope.getClientesComparativo = function()
    {
       ClientesService.loadClientesComparativo($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.clientesComparativo = data;

        });
    }
    
 

}]);


