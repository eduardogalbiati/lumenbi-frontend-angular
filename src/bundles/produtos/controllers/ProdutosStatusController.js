app.controller('ProdutosStatusController',['$scope','ProdutosService', '$q', '$timeout', function( $scope , ProdutosService, $q, $timeout) {

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
        mes : '3',
        mesDesc : 'Setembro',
        mesIntervalo : '3',
        mesIntervaloDesc : '3 Mêses',
        anos : [],
        ano : '2016',
        anoComparativo: '2015',
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

    $scope.produtosPositivos;
    $scope.produtosNegativos;
    $scope.produtosRecuperados;
    $scope.produtosNovos;
    $scope.produtosRegulares;
    $scope.produtosComparativoHead;
    $scope.produtosComparativo;
    $scope.produtosComparativoHeadAnoPassado

    $scope.pageSize = 10;
    $scope.currentPage = 0;

    $scope.$watchGroup(['parametros.ano', 'parametros.mes', 'parametros.mesIntervalo','parametros.anoComparativo'], function() {
        $scope.getProdutosComparativoHeadAnoPassado();
        $scope.getProdutosPositivos();
        $scope.getProdutosRegulares();
        $scope.getProdutosNegativos();
        $scope.getProdutosRecuperados();
        $scope.getProdutosNovos();
        $scope.getProdutosComparativo();
        $scope.getProdutosComparativoHead();


    });

    

    $scope.getProdutosPositivos = function()
    {
       ProdutosService.loadProdutosPositivos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosPositivos = data;

        });
    }
    $scope.getProdutosRegulares = function()
    {
       ProdutosService.loadProdutosRegulares($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosRegulares = data;

        });
    }
    $scope.getProdutosNegativos = function()
    {
       ProdutosService.loadProdutosNegativos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosNegativos = data;

        });
    }
    $scope.getProdutosRecuperados = function()
    {
       ProdutosService.loadProdutosRecuperados($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosRecuperados = data;

        });
    }
    $scope.getProdutosNovos = function()
    {
       ProdutosService.loadProdutosNovos($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosNovos = data;

        });
    }

    $scope.getProdutosComparativoHead = function()
    {
       ProdutosService.loadProdutosComparativoHead($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosComparativoHead = data;

        });
    }

    $scope.getProdutosComparativoHeadAnoPassado = function()
    {
       ProdutosService.loadProdutosComparativoHead('12',$scope.parametros.anoComparativo,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosComparativoHeadAnoPassado = data;

        });
    }

    $scope.getProdutosComparativo = function()
    {
       ProdutosService.loadProdutosComparativo($scope.parametros.mes,$scope.parametros.ano,$scope.parametros.mesIntervalo).then(function(data) {
            $scope.produtosComparativo = data;

        });
    }
    
 

}]);


