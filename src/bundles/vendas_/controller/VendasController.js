app.controller('VendasController',['$scope','VendasService', function( $scope , VendasService) {


    $scope.vendasData;
    $scope.vendasComparativoData;
    $scope.vendasLegenda;
    $scope.vendasOptions;
    $scope.vendasComparativoOptions;

    $scope.colors = ['#7266ba','#23b7e5','#27c24c','#fad733','#f05050','#7266ba','#23b7e5','#27c24c','#fad733','#f05050','#7266ba','#23b7e5','#27c24c','#fad733','#f05050','#7266ba','#23b7e5','#27c24c','#fad733','#f05050'];

    $scope.vendasAnualDados = Array()
    $scope.vendasMensalDados = Array()
    $scope.vendasDiarioDados = Array()
    $scope.vendasAnualLegenda = ''
    $scope.vendasMensalLegenda = ''
    $scope.vendasDiarioLegenda = ''

    $scope.vendasAnualComparativoDados = "[]"
    $scope.vendasMensalComparativoDados = "[]"
    $scope.vendasDiarioComparativoDados = "[]"
    $scope.vendasAnualComparativoLegenda = ''
    $scope.vendasMensalComparativoLegenda = ''
    $scope.vendasDiarioComparativoLegenda = ''
    $scope.vendasView = 'Anual'


    $scope.vendasClientesTotal = Array();
    $scope.vendasClientesTotalChart = Array();

    $scope.vendasVendedoresTotal = Array();
    $scope.vendasVendedoresTotalChart = Array();
    $scope.vendasVendedoresView = 'Desde sempre'
    $scope.vendasClientesView = 'Desde sempre'


    $scope.ano = '2015';
    $scope.mes = '9';

    $scope.titulo = 'Tudo'



        /* ---------------------- Clientes -------------------*/
        $scope.setClientesView = function($view, $ano, $mes)
        {
            $scope.vendasClientesView = $view;
            if($view == 'No mês passado')
            {
                $scope.topClientesMes('8','2015');
            }
            if($view == 'No mês atual')
            {
                $scope.topClientesMes('9','2015');
            }
            if($view == 'Neste ano')
            {
                $scope.topClientesAno('2015');
            }
            if($view == 'No ano passado')
            {
                $scope.topClientesAno('2014');
            }
            if($view == 'Desde sempre')
            {
                $scope.topClientes();
            }

        }

        $scope.topClientes = function()
        {
            VendasService.getTopClientesTotal().then(function(data) {
                $scope.vendasClientesTotal = data.list;
                $scope.vendasClientesTotalChart = data.chart;

            });
        }
        $scope.topClientesMes = function($mes, $ano)
        {
            VendasService.getTopClientesMes($mes, $ano).then(function(data) {
                $scope.vendasClientesTotal = data.list;
                $scope.vendasClientesTotalChart = data.chart;

            });
        }
        $scope.topClientesAno = function($ano)
        {
            VendasService.getTopClientesAno($ano).then(function(data) {
                $scope.vendasClientesTotal = data.list;
                $scope.vendasClientesTotalChart = data.chart;

            });
        }


        /* ---------------------- Vendedores -------------------*/
        $scope.setVendedoresView = function($view, $ano, $mes)
        {
            $scope.vendasVendedoresView = $view;
            if($view == 'No mês passado')
            {
                $scope.topVendedoresMes('8','2015');
            }
            if($view == 'No mês atual')
            {
                $scope.topVendedoresMes('9','2015');
            }
            if($view == 'Neste ano')
            {
                $scope.topVendedoresAno('2015');
            }
            if($view == 'No ano passado')
            {
                $scope.topVendedoresAno('2014');
            }
            if($view == 'Desde sempre')
            {
                $scope.topVendedores();
            }

        }

        $scope.topVendedores = function()
        {
            VendasService.getTopVendedoresTotal().then(function(data) {
                $scope.vendasVendedoresTotal = data.list;
                $scope.vendasVendedoresTotalChart = data.chart;

            });
        }
        $scope.topVendedoresMes = function($mes, $ano)
        {
            VendasService.getTopVendedoresMes($mes, $ano).then(function(data) {
                $scope.vendasVendedoresTotal = data.list;
                $scope.vendasVendedoresTotalChart = data.chart;

            });
        }
        $scope.topVendedoresAno = function($ano)
        {
            VendasService.getTopVendedoresAno($ano).then(function(data) {
                $scope.vendasVendedoresTotal = data.list;
                $scope.vendasVendedoresTotalChart = data.chart;

            });
        }


        /* ---------------------- Vendas -------------------*/

        $scope.setVendasView = function($view, $ano, $mes)
        {
            $scope.vendasView = $view;
            if($view == 'Anual')
            {
                $scope.vendasAnual();
            }
            if($view == 'Mensal')
            {
                $scope.vendasMensal();
            }
            if($view == 'Diário')
            {
                $scope.vendasDiario();
            }

        }
        $scope.vendasAnual = function()
        {
            VendasService.getVendasAnual().then(function(data) {
                $scope.vendasAnualDados =  data;
                $scope.vendasAnualLegenda = 'Anual'


                $scope.vendasLegenda = 'Anual'
                $scope.vendasOption = {
                  'colors': $scope.colors,
                  'series': { shadowSize: 2 },
                  'xaxis':{ font: { color: '#ccc' } },
                  'yaxis':{ font: { color: '#ccc' } },
                  'grid': { hoverable: true, clickable: true, borderWidth: 0, color: '#ccc' },
                  'tooltip': true,
                  'tooltipOpts': { content: '%s of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 0, y: 20 } },
                  'xaxis':{
                    'font': { color: '#333' },
                    'position': 'bottom',

                  },
                  yaxis:{ font: { color: '#333' } },
                }

                $scope.vendasData = [
                  { 'data': data, label: 'asd', points: { show: true }, lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.1 }, { opacity: 0.1}] } } }

                ];

            });
        }

        $scope.vendasMensal = function()
        {
            VendasService.getVendasMensal(($scope.ano -1)).then(function(data) {
                $scope.vendasComparativo = data;
                $scope.vendasMensalComparativoDados =  data;
                $scope.vendasMensalComparativoLegenda = $scope.ano -1

            });
            VendasService.getVendasMensal($scope.ano).then(function(data) {
                $scope.vendasMensalDados =  data;
                $scope.vendasMensalLegenda = $scope.ano


                $scope.vendasLegenda = 'Mensal'
                $scope.vendasOption = {
                  colors: $scope.colors,
                  series: { shadowSize: 2 },
                  xaxis:{ font: { color: '#ccc' } },
                  yaxis:{ font: { color: '#ccc' } },
                  grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#ccc' },
                  'tooltip': true,
                  'tooltipOpts': { content: '%s of %x.1 is %y.4',  defaultTheme: true, shifts: { x: 0, y: 20 } },
                  'xaxis':{
                    'font': { color: '#333' },
                    'position': 'bottom'
                  },
                  yaxis:{ font: { color: '#333' } },
                }
                $scope.vendasData = [
                  { 'data': $scope.vendasComparativo, label: '2014', points: { show: true }, lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.1 }, { opacity: 0.1}] } } },
                  { 'data': data, label: '2015', points: { show: true }, lines: { show: true, fill: true, fillColor: { colors: [{ opacity: '0.1' }, { opacity: '0.1'}] } } }

                ];

            });

        }

        $scope.vendasDiario = function()
        {
            VendasService.getVendasDiario(($scope.mes-1), $scope.ano).then(function(data) {
                $scope.vendasComparativo = data;
                $scope.vendasDiarioComparativoDados =  data;
                $scope.vendasDiarioComparativoLegenda = ($scope.mes -1)
            });
            VendasService.getVendasDiario($scope.mes, $scope.ano).then(function(data) {
                $scope.vendasDiarioDados =  data;
                $scope.vendasDiarioLegenda = $scope.mes


                $scope.vendasLegenda = 'Mensal'
                $scope.vendasOption = {
                  'colors': $scope.colors,
                  'series': { shadowSize: 2 },
                  'xaxis':{ font: { color: '#ccc' } },
                  'yaxis':{ font: { color: '#ccc' } },
                  'grid': { hoverable: true, clickable: true, borderWidth: 0, color: '#ccc' },
                  'tooltip': true,
                  'tooltipOpts': { content: '%s of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 0, y: 20 } },
                  'xaxis':{
                    'font': { color: '#333' },
                    'position': 'bottom'

                  },
                  yaxis:{ font: { color: '#333' } },
                }
                $scope.vendasData = [
                    { 'data': $scope.vendasComparativo, label: '2014', points: { show: true }, lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.1 }, { opacity: 0.1}] } } },
                  { 'data': data, label: 'asd', points: { show: true }, lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.1 }, { opacity: 0.1}] } } }

                ];
            });

        }

        $scope.vendasAnual();
        $scope.vendasMensal();
        $scope.vendasDiario();
        $scope.topClientes();
        $scope.topVendedores();

}]);
