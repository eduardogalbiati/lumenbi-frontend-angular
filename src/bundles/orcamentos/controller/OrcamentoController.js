app.controller('OrcamentoController',['$scope','OrcamentoService', function( $scope , OrcamentoService) {

    $scope.vendasDados = Array()
    $scope.vendasLegenda = ''
    $scope.vendasComparativoDados = "[]"
    $scope.vendasComparativoLegenda = ''

    $scope.ano = '2015';
    $scope.mes = '9';

    $scope.titulo = 'Mensal'
/*
    $scope.foo = 'asd';
    $scope.date = new Date();
    $scope.category = [

        { name: 'Aluguel',      group: 'Moradia' },
        { name: 'Café',      group: 'Estilo de Vida' },
        { name: 'Almoço',      group: 'Estilo de Vida' },
        { name: 'Janta',      group: 'Estilo de Vida' }
        ];


    $scope.category2 =[

            { name: 'Aluguel',      group: 'Moradia' },
            { name: 'Café',      group: 'Estilo de Vida' },
            { name: 'Almoço',      group: 'Estilo de Vida' },
            { name: 'Janta',      group: 'Estilo de Vida' }
            ];
            */
        $scope.vendasAnual = function()
        {
            OrcamentoService.getVendasAnual().then(function(data) {
                $scope.vendasDados =  data;
                $scope.d =  data;
                $scope.vendasLegenda = 'Anual'
            });
        }

        $scope.vendasMensal = function()
        {
            OrcamentoService.getVendasMensal($scope.ano).then(function(data) {
                $scope.vendasDados =  data;
                $scope.vendasLegenda = $scope.ano
            });
            OrcamentoService.getVendasMensal(($scope.ano -1)).then(function(data) {
                $scope.vendasComparativoDados =  data;
                $scope.vendasComparativoLegenda = $scope.ano -1

            });
        }

        $scope.vendasDiario = function()
        {
            OrcamentoService.getVendasDiario($scope.mes, $scope.ano).then(function(data) {
                $scope.vendasDados =  data;
                $scope.vendasLegenda = $scope.mes
            });
            OrcamentoService.getVendasDiario(($scope.mes-1), $scope.ano).then(function(data) {
                $scope.vendasDados =  data;
                $scope.vendasLegenda = ($scope.mes -1)
            });
        }

        $scope.vendasMensal();
                //$scope.d0_1 = [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7] ];

                $scope.d0_2 = [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ];

                //$scope.d0_media = [ [0,5.5],[1,5.5],[2,9],[3,5.8],[4,6],[5,5],[6,8],[7,4.5],[8,6],[9,5] ];

                $scope.d1_1 = [ [10, 120], [20, 70], [30, 70], [40, 60] ];

                $scope.d1_2 = [ [10, 50],  [20, 60], [30, 90],  [40, 35] ];

                $scope.d1_3 = [ [10, 80],  [20, 40], [30, 30],  [40, 20] ];

                $scope.d2 = [];

                for (var i = 0; i < 20; ++i) {
                  $scope.d2.push([i, Math.round( Math.sin(i)*100)/100] );
                }

                $scope.d3 = [
                  { label: "iPhone5S", data: 40 },
                  { label: "iPad Mini", data: 10 },
                  { label: "iPad Mini Retina", data: 20 },
                  { label: "iPhone4S", data: 12 },
                  { label: "iPad Air", data: 18 }
                ];

                    $scope.orcamentoQuantidade = [
                  { label: "John", data: 40 },
                        { label: "James", data: 20 },
                        { label: "Paul", data: 18 },
                      { label: "Aron", data: 12 },
                  { label: "Keanu", data: 10 }

                ];

                    $scope.orcamentoValores = [
                        { label: "Keanu", data: 35 },
                        { label: "James", data: 30 },
                  { label: "John", data: 25 },
                  { label: "Paul", data: 18 },
                  { label: "Aron", data: 2 }

                ];

                $scope.refreshData = function(){
                  $scope.d0_1 = $scope.d0_2;
                };

                $scope.getRandomData = function() {
                  var data = [],
                  totalPoints = 150;
                  if (data.length > 0)
                    data = data.slice(1);
                  while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                      y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                      y = 0;
                    } else if (y > 100) {
                      y = 100;
                    }
                    data.push(Math.round(y*100)/100);
                  }
                  // Zip the generated y values with the x values
                  var res = [];
                  for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                  }
                  return res;
                }

                $scope.d4 = $scope.getRandomData();
}]);
