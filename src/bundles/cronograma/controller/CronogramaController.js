app.controller('CronogramaController',['$scope', function( $scope ) {

     $scope.d = [ [1,6.5],[2,6.5],[3,7],[4,8],[5,7.5],[6,7],[7,6.8],[8,7],[9,7.2],[10,7],[11,6.8],[12,7] ];

    $scope.d0_1 = [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,10] ];

    $scope.d0_2 = [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ];

    $scope.d1_1 = [ [10, 120], [20, 70], [30, 70], [40, 60] ];

    $scope.d1_2 = [ [10, 50],  [20, 60], [30, 90],  [40, 35] ];

    $scope.d1_3 = [ [10, 80],  [20, 40], [30, 30],  [40, 20] ];

    $scope.d2 = ['asd','70'];

    //for (var i = 0; i < 20; ++i) {
    //  $scope.d2.push([i, Math.round( Math.random(i)*100)/100] );
    //}   

    $scope.d3 = [ 
      { label: "Material de Construção", data: 40 }, 
      { label: "Material Elétrico", data: 10 },
      { label: "Piso e Azulejo", data: 20 },
      { label: "Metais e Acessórios", data: 12 },
      { label: "Iluminação", data: 18 }
    ];

    $scope.d3_ = [ 
      { label: "Geraldo Fontana", data: 40 }, 
      { label: "Patrícia Messias", data: 20 },
      { label: "Luiz de Souza", data: 10 },
      { label: "Roberto Augusto", data: 8 },
      { label: "Thássia Amaral", data: 7 }
    ];

    $scope.d3_c = [ 
      { label: "R&M Construções", data: 40 }, 
      { label: "PSolutions Engenharia", data: 20 },
      { label: "KPC Empreendimentos", data: 10 },
      { label: "Construcções Meu lar", data: 8 },
      { label: "Encol", data: 7 }
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
