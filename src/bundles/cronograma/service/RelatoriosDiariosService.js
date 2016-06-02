app.factory('RelatoriosDiariosService', function($http) {
   return {
       getVendasAnual: function() {
            //return the promise directly.
            return $http.get('http://auper.local/Vendas/Valores/Anual')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
       },
        getVendasMensal: function(ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Valores/Mensal/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        getVendasDiario: function(mes, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Valores/Diario/Mes/'+mes+'/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }

   }
});
