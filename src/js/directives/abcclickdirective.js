app
  .directive('abcMonthBind', ['$rootScope', '$anchorScroll', '$location', '$document', function($rootScope, $anchorScroll, $location, $document) {
     return {
        restrict: 'A',
        compile: function(scope, element, attrs) {
            return {
              pre: function(scope, iElem, iAttrs){
              $('#'+element.id).bind("plotclick", function (event, pos, item) {
              if (item) {  
                //$('#butterbar').addClass('active').removeClass('hide');
                if(item.seriesIndex == 0){
                  scope.filtraCurvaA();
                }
                if(item.seriesIndex == 1){
                  scope.filtraCurvaB();
                }
                if(item.seriesIndex == 2){
                  scope.filtraCurvaC();
                }
                if(item.seriesIndex == 3){
                  scope.filtraCurvaTodas();
                }
                scope.$apply(function(scope) {
                    scope.abcParametros.mes = item.datapoint[0];
                })
                var offset = 70;
                var section3 = angular.element(document.getElementById('tableCurvaAbc'));
                $document.scrollToElementAnimated(section3, offset);

                                    
                 
              }
              }).bind("plothover", function(event, pos, item) {
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