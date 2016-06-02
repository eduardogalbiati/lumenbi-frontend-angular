app.controller('FornecedoresStatusController',['$scope','FornecedoresService', '$q', '$timeout', function( $scope , FornecedoresService, $q, $timeout) {

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
        mes : '9',
        mesDesc : 'Setembro',
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

    $scope.fornecedoresPositivos;
    $scope.fornecedoresNegativos;
    $scope.fornecedoresRecuperados;
    $scope.fornecedoresNovos;
    $scope.fornecedoresRegulares;
    $scope.fornecedoresComparativoHead;
    $scope.fornecedoresComparativo;
    $scope.fornecedoresComparativoHeadAnoPassado

    $scope.pageSize = 10;
    $scope.currentPage = 0;

    $scope.$watchGroup(['parametros.ano', 'parametros.mes', 'parametros.mesIntervalo','parametros.anoComparativo'], function() {
        $scope.getFornecedoresComparativoHeadAnoPassado();
        $scope.getFornecedoresPositivos();
        $scope.getFornecedoresRegulares();
        $scope.getFornecedoresNegativos();
        $scope.getFornecedoresRecuperados();
        $scope.getFornecedoresNovos();
        $scope.getFornecedoresComparativo();
        $scope.getFornecedoresComparativoHead();


    });

    

    $scope.getFornecedoresPositivos = function()
    {
       FornecedoresService.loadFornecedoresPositivos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresPositivos = data;

        });
    }
    $scope.getFornecedoresRegulares = function()
    {
       FornecedoresService.loadFornecedoresRegulares($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresRegulares = data;

        });
    }
    $scope.getFornecedoresNegativos = function()
    {
       FornecedoresService.loadFornecedoresNegativos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresNegativos = data;

        });
    }
    $scope.getFornecedoresRecuperados = function()
    {
       FornecedoresService.loadFornecedoresRecuperados($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresRecuperados = data;

        });
    }
    $scope.getFornecedoresNovos = function()
    {
       FornecedoresService.loadFornecedoresNovos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresNovos = data;

        });
    }

    $scope.getFornecedoresComparativoHead = function()
    {
       FornecedoresService.loadFornecedoresComparativoHead($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresComparativoHead = data;

        });
    }

    $scope.getFornecedoresComparativoHeadAnoPassado = function()
    {
       FornecedoresService.loadFornecedoresComparativoHead('12',$scope.parametros.anoComparativo,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresComparativoHeadAnoPassado = data;

        });
    }

    $scope.getFornecedoresComparativo = function()
    {
       FornecedoresService.loadFornecedoresComparativo($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.fornecedoresComparativo = data;

        });
    }
    
 

}]);


