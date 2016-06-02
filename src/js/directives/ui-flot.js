angular.module('app')
.directive('chart', function(){
    return{
        restrict: 'E',
        link: function(scope, elem, attrs){

            var chart = null,
                options = {
                  'colors': [ '{{app.color.info}}','{{app.color.warning}}','{{app.color.danger}}' ],
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
                };

            var data = scope[attrs.ngModel];

            // If the data changes somehow, update it in the chart
            scope.$watch('vendasAnualDados', function(v){
                 if(!chart){
                    chart = $.plot(elem, v , options);
                    elem.show();
                }else{
                    chart.setData(v);
                    //chart.setupGrid();
                    chart.draw();
                }
            });
        }
    };
});
