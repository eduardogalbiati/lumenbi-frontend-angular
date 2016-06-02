app.factory('testeService', function($http) {
   return {
        getCategorias: function(teste) {
             //return the promise directly.
             return $http.get('http://localhost')
                       .then(function(result) {
                            //resolve the promise as the data
                            return 'asd'
                        });
        }
   }
});