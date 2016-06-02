app.factory('testeService', function($http) {
   return {
        getFoos: function(teste) {
             //return the promise directly.
             return $http.get('http://agility:80/categorias')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result;
                        });
        }
   }
});