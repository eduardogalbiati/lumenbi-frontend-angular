app.controller('ProdutosPerfilController',['$scope','ProdutosService', '$q', '$timeout', '$stateParams', function( $scope , ProdutosService, $q, $timeout, $stateParams) {


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

    $scope.clientesFilter = {
        sortType : 'valorTotal',
        sortReverse: true
    }
    $scope.fornecedoresFilter = {
        sortType : 'valorTotal',
        sortReverse: true
    }
    $scope.vendedoresFilter = {
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

    $scope.loadVendasMensal = function()
    {
        ProdutosService.loadProdutoVendasMensal($stateParams.idProduto, $scope.filters.ano, $scope.filters.qtdValores).then(function(data){
            $scope.vendasMensal = data;
        })
    }

    $scope.loadVendasMensalComp = function()
    {
        ProdutosService.loadProdutoVendasMensal($stateParams.idProduto, $scope.filters.anoComp, $scope.filters.qtdValores).then(function(data){
            $scope.vendasMensalComp = data;
        })
    }

    $scope.loadVendasMensal();
    $scope.loadVendasMensalComp();

    $scope.loadProdutoInfo = function()
    {
        ProdutosService.loadProdutoInfo($stateParams.idProduto,$scope.filters.interval).then(function(data){
            $scope.info = data;
        })
    }

    $scope.loadProdutoInfo();

    $scope.loadProdutoClientes = function()
    {
        ProdutosService.loadProdutoClientes($stateParams.idProduto, $scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.produtoClientes = data;
        })
    }

    $scope.loadProdutoClientes();

    $scope.loadProdutoFornecedores = function()
    {
        ProdutosService.loadProdutoFornecedores($stateParams.idProduto,$scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.produtoFornecedores = data;
        })
    }

    $scope.loadProdutoFornecedores();

    $scope.loadProdutoVendedores = function()
    {
        ProdutosService.loadProdutoVendedores($stateParams.idProduto,$scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.produtoVendedores = data;
        })
    }

    $scope.loadProdutoVendedores();


    $scope.loadHistoricoCompra = function()
    {
        ProdutosService.loadHistoricoCompra($stateParams.idProduto, $scope.filters.ano).then(function(data){
            ProdutosService.loadHistoricoCompra($stateParams.idProduto, $scope.filters.anoComp).then(function(data){
                $scope.historicoCusto.comp = data;
            })
            $scope.historicoCusto.atual = data;
        });

        
    }

    $scope.loadHistoricoCompra();

    $scope.loadHistoricoVenda = function()
    {
        ProdutosService.loadHistoricoVenda($stateParams.idProduto, $scope.filters.ano).then(function(data){
            $scope.historicoVenda.atual = data;
            ProdutosService.loadHistoricoVenda($stateParams.idProduto, $scope.filters.anoComp).then(function(data){
                $scope.historicoVenda.comp = data;
            })
        });

       
    }

    $scope.loadHistoricoVenda();

    $scope.loadHistoricoMargem = function()
    {
        ProdutosService.loadHistoricoMargem($stateParams.idProduto, $scope.filters.ano).then(function(data){
            $scope.historicoMargem.atual = data;
            ProdutosService.loadHistoricoMargem($stateParams.idProduto, $scope.filters.anoComp).then(function(data){
                $scope.historicoMargem.comp = data;
            })
        });

        
    }

    $scope.loadHistoricoMargem();
/*
    $scope.clientes;

    $scope.$watch(['filters'], function() {
       $scope.filters.mesInicioDesc = $scope.meses.desc[($scope.filters.mesInicio-1)];
       $scope.filters.mesFimDesc = $scope.meses.desc[($scope.filters.mesFim-1)];
       $scope.loadClientes();
    });

    $scope.loadClientes = function()
    {
        var dataInicio = $scope.filters.anoInicio+'-'+$scope.filters.mesInicio+'-01';
        var dataFim = $scope.filters.anoFim+'-'+$scope.filters.mesFim+'-28';

        ClientesService.getAll(dataInicio, dataFim, $scope.filters.status).then(function(data) {
            $scope.clientes = data;
        });
    }
  */
}]);


