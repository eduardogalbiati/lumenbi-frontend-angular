app.controller('testeCtrl',['$scope','testeService', function( $scope , testeService) {
	$scope.foo = 'asd';
    $scope.date = new Date();
	$scope.category = [
        { name: 'Cigarro',      group: 'Estilo de Vida'  },
        { name: 'Aluguel',      group: 'Moradia' },
        { name: 'Café',      group: 'Estilo de Vida' },
        { name: 'Almoço',      group: 'Estilo de Vida' },
        { name: 'Janta',      group: 'Estilo de Vida' }
        ];

    $scope.category2 = testeService.getCategorias();
}]);
