app.controller('FornecedoresPerfilController',['$scope','FornecedoresService', '$q', '$timeout', '$stateParams', function( $scope , FornecedoresService, $q, $timeout, $stateParams) {


    $scope.date = new Date();

    $scope.filters = {
        mes : '9',
        mesDesc : '09 - Setembro',
        ano : '2015',
        anoComp : '2014',
        qtdValores : 'Valores',
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
        interval : '3',
        intervalDesc : '3 Meses'
    }

    $scope.info = {
        nomeProduto: 'Teste'
    }

    $scope.produtosFilter = {
        sortType : 'valorTotal',
        sortReverse: true
    }


    $scope.meses = {
        desc : [
            '01 - Janeiro',
            '02 - Fevereiro',
            '03 - Março',
            '04 - Abril',
            '05 - Maio',
            '06 - Junho',
            '07 - Julho',
            '08 - Agosto',
            '09 - Setembro',
            '10 - Outubro',
            '11 - Novembro',
            '12 - Dezembro'
        ]};

    $scope.vendasMensal;
    $scope.vendasMensalComp;
    $scope.historicoCusto = { 
        atual : [],
        comp : [],
    }

    $scope.historicoVenda = { 
        atual : [],
        comp : [],
    }
    $scope.historicoMargem = { 
        atual : [],
        comp : [],
    }

    $scope.loadComprasMensal = function()
    {
        FornecedoresService.loadFornecedorComprasMensal($stateParams.idFornecedor, $scope.filters.ano, $scope.filters.qtdValores).then(function(data){
            $scope.comprasMensal = data;
        })
    }

    $scope.loadComprasMensalComp = function()
    {
        FornecedoresService.loadFornecedorComprasMensal($stateParams.idFornecedor, $scope.filters.anoComp, $scope.filters.qtdValores).then(function(data){
            $scope.comprasMensalComp = data;
        })
    }

    $scope.loadComprasMensal();
    $scope.loadComprasMensalComp();

    $scope.loadFornecedorInfo = function()
    {
        FornecedoresService.loadFornecedorInfo($stateParams.idFornecedor,$scope.filters.interval).then(function(data){
            $scope.info = data;
        })
    }

    $scope.loadFornecedorInfo();

    $scope.loadFornecedorProdutos = function()
    {
        FornecedoresService.loadFornecedorProdutos($stateParams.idFornecedor, $scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.fornecedorProdutos = data;
        })
    }

    $scope.loadFornecedorProdutos();



    $scope.loadHistoricoCompra = function()
    {
        FornecedoresService.loadHistoricoCompra($stateParams.idFornecedor, $scope.filters.ano).then(function(data){
            FornecedoresService.loadHistoricoCompra($stateParams.idFornecedor, $scope.filters.anoComp).then(function(data){
                $scope.historicoCusto.comp = data;
            })
            $scope.historicoCusto.atual = data;
        });

        
    }

    $scope.loadHistoricoCompra();

    $scope.loadHistoricoVenda = function()
    {
        FornecedoresService.loadHistoricoVenda($stateParams.idFornecedor, $scope.filters.ano).then(function(data){
            $scope.historicoVenda.atual = data;
            FornecedoresService.loadHistoricoVenda($stateParams.idFornecedor, $scope.filters.anoComp).then(function(data){
                $scope.historicoVenda.comp = data;
            })
        });

       
    }

    $scope.loadHistoricoVenda();

    $scope.loadHistoricoMargem = function()
    {
        FornecedoresService.loadHistoricoMargem($stateParams.idFornecedor, $scope.filters.ano).then(function(data){
            $scope.historicoMargem.atual = data;
            FornecedoresService.loadHistoricoMargem($stateParams.idFornecedor, $scope.filters.anoComp).then(function(data){
                $scope.historicoMargem.comp = data;
            })
        });

        
    }

    $scope.loadHistoricoMargem();
/*
    $scope.Fornecedores;

    $scope.$watch(['filters'], function() {
       $scope.filters.mesInicioDesc = $scope.meses.desc[($scope.filters.mesInicio-1)];
       $scope.filters.mesFimDesc = $scope.meses.desc[($scope.filters.mesFim-1)];
       $scope.loadFornecedores();
    });

    $scope.loadFornecedores = function()
    {
        var dataInicio = $scope.filters.anoInicio+'-'+$scope.filters.mesInicio+'-01';
        var dataFim = $scope.filters.anoFim+'-'+$scope.filters.mesFim+'-28';

        FornecedoresService.getAll(dataInicio, dataFim, $scope.filters.status).then(function(data) {
            $scope.Fornecedores = data;
        });
    }
  */
}]);


