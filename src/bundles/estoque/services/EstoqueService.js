app.factory('EstoqueService', function($http) {
   return {
      getCurvaAbc: function() {
            //return the promise directly.
            return $http.get('http://auper.local/Estoque/CurvaAbc')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getCurvaAbcSemQtd: function() {
            //return the promise directly.
            return $http.get('http://auper.local/Estoque/CurvaAbcSemQtd')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      }


   }
});
