app.factory('ProdutosService', function($http) {
   return {

       loadProdutoVendasMensal: function(ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/Vendas/Mensal/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }
   }
});
