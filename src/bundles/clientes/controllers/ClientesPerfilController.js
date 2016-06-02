app.controller('ClientesPerfilController',['$scope','ClientesService', '$q', '$timeout', '$stateParams', function( $scope , ClientesService, $q, $timeout, $stateParams) {


    $scope.date = new Date();

    $scope.filters = {
        mes : '3',
        mesDesc : '03 - Março',
        ano : '2016',
        anoComp : '2015',
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
        ClientesService.loadClienteVendasMensal($stateParams.idCliente, $scope.filters.ano, $scope.filters.qtdValores).then(function(data){
            $scope.vendasMensal = data;
        })
    }

    $scope.loadVendasMensalComp = function()
    {
        ClientesService.loadClienteVendasMensal($stateParams.idCliente, $scope.filters.anoComp, $scope.filters.qtdValores).then(function(data){
            $scope.vendasMensalComp = data;
        })
    }

    $scope.loadVendasMensal();
    $scope.loadVendasMensalComp();

    $scope.loadClienteInfo = function()
    {
        ClientesService.loadClienteInfo($stateParams.idCliente,$scope.filters.interval).then(function(data){
            $scope.info = data;
        })
    }

    $scope.loadClienteInfo();

    $scope.loadClienteProdutos = function()
    {
        ClientesService.loadClienteProdutos($stateParams.idCliente, $scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.clienteProdutos = data;
        })
    }

    $scope.loadClienteProdutos();


    $scope.loadClienteVendedores = function()
    {
        ClientesService.loadClienteVendedores($stateParams.idCliente,$scope.filters.ano, $scope.filters.mes, $scope.filters.interval).then(function(data){
            $scope.clienteVendedores = data;
        })
    }

    $scope.loadClienteVendedores();


    $scope.loadHistoricoCompra = function()
    {
        ClientesService.loadHistoricoCompra($stateParams.idCliente, $scope.filters.ano).then(function(data){
            ClientesService.loadHistoricoCompra($stateParams.idCliente, $scope.filters.anoComp).then(function(data){
                $scope.historicoCusto.comp = data;
            })
            $scope.historicoCusto.atual = data;
        });

        
    }

    $scope.loadHistoricoCompra();

    $scope.loadHistoricoVenda = function()
    {
        ClientesService.loadHistoricoVenda($stateParams.idCliente, $scope.filters.ano).then(function(data){
            $scope.historicoVenda.atual = data;
            ClientesService.loadHistoricoVenda($stateParams.idCliente, $scope.filters.anoComp).then(function(data){
                $scope.historicoVenda.comp = data;
            })
        });

       
    }

    $scope.loadHistoricoVenda();

    $scope.loadHistoricoMargem = function()
    {
        ClientesService.loadHistoricoMargem($stateParams.idCliente, $scope.filters.ano).then(function(data){
            $scope.historicoMargem.atual = data;
            ClientesService.loadHistoricoMargem($stateParams.idCliente, $scope.filters.anoComp).then(function(data){
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


