app
  .directive('statusMonthBind', ['$rootScope', '$anchorScroll', '$location', '$document', function($rootScope, $anchorScroll, $location, $document) {
     return {
        restrict: 'A',
        compile: function(scope, element, attrs) {
            return {
              pre: function(scope, iElem, iAttrs){
              $('#'+element.id).bind("plotclick", function (event, pos, item) {
              if (item) {  
                scope.$apply(function(scope) {
                    scope.parametros.mes = item.datapoint[0];
                    scope.parametros.mesDesc = scope.parametros.meses[(item.datapoint[0]-1)];
                })
              }
              })
              .bind("plothover", function(event, pos, item) {
                  if(item) {
                      document.body.style.cursor = 'pointer';
                  } else {
                      document.body.style.cursor = 'default';
                  }
              })
            }

        }
    }
  }
  }
    ]);