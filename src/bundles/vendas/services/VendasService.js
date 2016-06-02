app.factory('VendasService', function($http) {
   return {
       getVendas: function(mes, ano, tipo) {
            //return the promise directly.
            if(tipo == 'Mensal'){
                return $http.get('http://auper.local/Vendas/Valores/Mensal/Ano/'+ano)
                          .then(function(result) {
                               //resolve the promise as the data
                               return result.data
                           });
            }else if(tipo == 'Diário'){
                return $http.get('http://auper.local/Vendas/Valores/Diario/Mes/'+mes+'/Ano/'+ano)
                          .then(function(result) {
                               //resolve the promise as the data
                               return result.data
                           });
            }else if(tipo == 'Anual'){
                return $http.get('http://auper.local/Vendas/Valores/Anual')
                          .then(function(result) {
                               //resolve the promise as the data
                               return result.data
                           });
            }
       },
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
        },
        getTopClientesTotal: function() {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Clientes/Valores')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        getTopClientesAno: function( ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Clientes/Valores/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        getTopClientesMes: function(mes, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Clientes/Valores/Mes/'+mes+'/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        getTopVendedoresTotal: function() {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Vendedores/Valores')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        getTopVendedoresAno: function( ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Vendedores/Valores/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        getTopVendedoresMes: function(mes, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendas/Vendedores/Valores/Mes/'+mes+'/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }


   }
});
