app.controller('VendedoresPerfilController',['$scope','VendedoresService', '$q', '$timeout', '$stateParams', function( $scope , VendedoresService, $q, $timeout, $stateParams) {


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

    $scope.clientesFilter = {
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
        VendedoresService.loadVendedorVendasMensal($stateParams.idVendedor, $scope.filters.ano, $scope.filters.qtdValores).then(function(data){
            $scope.vendasMensal = data;
        })
    }

    $scope.loadVendasMensalComp = function()
    {
        VendedoresService.loadVendedorVendasMensal($stateParams.idVendedor, $scope.filters.anoComp, $scope.filters.qtdValores).then(function(data){
            $scope.vendasMensalComp = data;
        })
    }

    $scope.loadVendasMensal();
    $scope.loadVendasMensalComp();

    $scope.loadVendedorInfo = function()
    {
        VendedoresService.loadVendedorInfo($stateParams.idVendedor,$scope.filters.interval).then(function(data){
            $scope.info = data;
        })
    }

    $scope.loadVendedorInfo();

    $scope.loadVendedorProdutos = function()
    {
        VendedoresService.loadVendedorProdutos($stateParams.idVendedor, $scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.vendedorProdutos = data;
        })
    }

    $scope.loadVendedorProdutos();


    $scope.loadVendedorClientes = function()
    {
        VendedoresService.loadVendedorClientes($stateParams.idVendedor,$scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.vendedorClientes = data;
        })
    }

    $scope.loadVendedorClientes();



    $scope.loadHistoricoVenda = function()
    {
        VendedoresService.loadHistoricoVenda($stateParams.idVendedor, $scope.filters.ano).then(function(data){
            $scope.historicoVenda.atual = data;
            VendedoresService.loadHistoricoVenda($stateParams.idVendedor, $scope.filters.anoComp).then(function(data){
                $scope.historicoVenda.comp = data;
            })
        });

       
    }

    $scope.loadHistoricoVenda();

    $scope.loadHistoricoMargem = function()
    {
        VendedoresService.loadHistoricoMargem($stateParams.idVendedor, $scope.filters.ano).then(function(data){
            $scope.historicoMargem.atual = data;
            VendedoresService.loadHistoricoMargem($stateParams.idVendedor, $scope.filters.anoComp).then(function(data){
                $scope.historicoMargem.comp = data;
            })
        });

        
    }

    $scope.loadHistoricoMargem();
/*
    $scope.Vendedores;

    $scope.$watch(['filters'], function() {
       $scope.filters.mesInicioDesc = $scope.meses.desc[($scope.filters.mesInicio-1)];
       $scope.filters.mesFimDesc = $scope.meses.desc[($scope.filters.mesFim-1)];
       $scope.loadVendedores();
    });

    $scope.loadVendedores = function()
    {
        var dataInicio = $scope.filters.anoInicio+'-'+$scope.filters.mesInicio+'-01';
        var dataFim = $scope.filters.anoFim+'-'+$scope.filters.mesFim+'-28';

        VendedoresService.getAll(dataInicio, dataFim, $scope.filters.status).then(function(data) {
            $scope.Vendedores = data;
        });
    }
  */
}]);


