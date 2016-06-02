app.controller('EstoqueAbcController',['$scope','EstoqueService', '$q', '$timeout', function( $scope , EstoqueService, $q, $timeout) {



    $scope.getLabel = function(mes)
    {
        if($scope.abcParametros.mes == mes){
            return '<span class="badge bg-danger">'+$scope.abcParametros.meses[(mes-1)]+'</span>';
        }else{
            //return '<a ng-click="abcParametros.mes = '+mes+'">'+$scope.abcParametros.meses[(mes-1)];
            return $scope.abcParametros.meses[(mes-1)];
        }
        var asd = $scope.curvaAbcHeadFilter.exibeTotal;
        $scope.curvaAbcHeadFilter.exibeTotal = 'asdasd';
        $scope.curvaAbcHeadFilter.exibeTotal = asd;
    }

    $scope.mesAtual = new Date;
    $scope.mesAtual = $scope.mesAtual.getMonth()+1

    $scope.abcParametros = {
        mes : '3',
        mesDesc : '9 - Setembro',
        ano : '2016',
        interval : '1',
        intervalDesc : '1 Mês',
        anos : [],
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
        intervalos: [{
            val:'1',
            desc:'1 Mês'
        },
        {
            val:'3',
            desc:'3 Meses'
        }] 
    };

    $scope.abcFilters = {
        sortType     : 'pos', 
        sortReverse  : false,  
        searchTerm   : '',
        blockA : {'classe' : 'AA'},
        blockB : {'classe' : 'BB'},
        blockC : {'classe' : 'CC'}
    }

    $scope.iswitch = {
        a : true,
        b : true,
        c : true,
        total : true,
        abcSemQtd : false
    }

    $scope.filtraCurvaA = function()
    {
        $scope.iswitch.a = true;
        $scope.iswitch.b = false;
        $scope.iswitch.c = false;
    }

    $scope.filtraCurvaB = function()
    {
        $scope.iswitch.a = false;
        $scope.iswitch.b = true;
        $scope.iswitch.c = false;
    }

    $scope.filtraCurvaC = function()
    {
        $scope.iswitch.a = false;
        $scope.iswitch.b = false;
        $scope.iswitch.c = true;
    }

    $scope.filtraCurvaTodas = function()
    {
        $scope.iswitch.a = true;
        $scope.iswitch.b = true;
        $scope.iswitch.c = true;
    }

    $scope.curvaAbcHeadFilter = {
        exibeTotal : '',
        exibeVirgula : ',',
    }

    $scope.abcData;

    $scope.curvaAbcHead;
    //$scope.totalPages;
    $scope.pageSize = 10;
    $scope.currentPage = 0;

    
    $scope.$watch('iswitch.a', function() {
       if($scope.iswitch.a == true){
           $scope.abcFilters.blockA.classe = 'AA'; 
        }else{
           $scope.abcFilters.blockA.classe = 'A'; 
        }
    });
    $scope.$watch('iswitch.b', function() {
       if($scope.iswitch.b == true){
           $scope.abcFilters.blockB.classe = 'BB'; 
        }else{
           $scope.abcFilters.blockB.classe = 'B'; 
        }
    });
    $scope.$watch('iswitch.c', function() {
        if($scope.iswitch.c == true){
           $scope.abcFilters.blockC.classe = 'CC'; 
        }else{
           $scope.abcFilters.blockC.classe = 'C'; 
        }
    });

    $scope.$watch('iswitch.total', function() {
        $scope.loadCurvaAbcHead();
    });

    $scope.$watch('iswitch.abcSemQtd', function() {
        if($scope.iswitch.abcSemQtd == true){
            $scope.loadCurvaAbcSemQtd();
        }else{
            $scope.loadCurvaAbc();
        }
    });
   
    $scope.$watchGroup(['abcParametros.ano', 'abcParametros.mes', 'abcParametros.interval'], function() {
        $scope.abcParametros.mesDesc = $scope.abcParametros.meses[($scope.abcParametros.mes-1)] + ' ' +$scope.abcParametros.mes+'/'+$scope.abcParametros.ano;
        $scope.loadCurvaAbc();
        $scope.loadCurvaAbcHead();
    });


  

/*
    $scope.toggleTotal = function()
    {
        //$scope.loadCurvaAbcHead();
        if($scope.curvaAbcHeadFilter.exibeTotal == ''){
            $scope.curvaAbcHeadFilter.exibeTotal = $scope.curvaAbcHeadFilter.data;
            $scope.curvaAbcHeadFilter.exibeVirgula = ',';
        }else{
            $scope.curvaAbcHeadFilter.exibeTotal = '';
            $scope.curvaAbcHeadFilter.exibeVirgula = '';
        }
    }
    */
   
    $scope.loadCurvaAbc = function()
    {
        EstoqueService.getCurvaAbc().then(function(data) {
            $scope.abcData = data;
        });
    }

    $scope.loadCurvaAbcSemQtd = function()
    {
        EstoqueService.getCurvaAbcSemQtd().then(function(data) {
            $scope.abcData = data;
        });
    }

     $scope.loadCurvaAbcHead = function()
    {
        EstoqueService.getCurvaAbcHead().then(function(data) {
            $scope.curvaAbcHead = data;
            if($scope.iswitch.total == true){
                $scope.curvaAbcHeadFilter.data = { data: $scope.curvaAbcHead.resumo.valorTotal, label: 'Total' , points: { show: true, radius: 6}, splines: { show: true, tension: 0.45, lineWidth: 5, fill: 0 } };
                $scope.curvaAbcHeadFilter.exibeTotal = $scope.curvaAbcHeadFilter.data 
                $scope.curvaAbcHeadFilter.exibeVirgula = ',' 
            }else{
                $scope.curvaAbcHeadFilter.data = ''
                $scope.curvaAbcHeadFilter.exibeTotal = ''
                $scope.curvaAbcHeadFilter.exibeVirgula = '' 
            }

        });
    }


    $scope.loadCurvaAbc();

}]);


