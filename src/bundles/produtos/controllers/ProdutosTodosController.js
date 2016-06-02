app.controller('ProdutosTodosController',['$scope','ProdutosService', '$q', '$timeout', function( $scope , ProdutosService, $q, $timeout) {


    $scope.date = new Date();

    $scope.filters = {
        mesInicio : '1',
        mesInicioDesc: '01 - Janeiro',
        anoInicio : '2015',
        mesFim : $scope.date.getMonth(),
        mesFimDesc: 'asd',//$scope.meses.desc[($scope.date.getMonth()-1)],
        anoFim : $scope.date.getFullYear(),
        status : 'S'
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
  
}]);


