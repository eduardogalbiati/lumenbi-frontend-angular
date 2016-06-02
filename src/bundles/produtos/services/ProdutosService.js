app.factory('ProdutosService', function($http) {
   return {
      getCurvaAbc: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/VendasProdutos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval+'/Historico')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getCurvaAbcHead: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/VendasProdutosHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getAll: function(dataInicio, dataFim, status) {
            //return the promise directly.
          
            return $http.get('http://auper.local/Produtos/De/'+dataInicio+'/Ate/'+dataFim+'/Status/'+status)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
       loadProdutosPositivos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Positivos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
         loadProdutosRegulares: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Regulares/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutosNegativos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Negativos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadProdutosRecuperados: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Recuperados/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadProdutosNovos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Novos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutosComparativo: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Comparativo/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutosComparativoHead: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/ComparativoHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoVendasMensal: function(idProduto, ano, qtdValores) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/'+qtdValores+'/Mensal/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoInfo: function(idProduto, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Resumo')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoClientes: function(idProduto, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Clientes/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoClientesSempre: function(idProduto, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Clientes')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoFornecedores: function(idProduto, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Fornecedores/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoFornecedoresSempre: function(idProduto, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Fornecedores')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoVendedores: function(idProduto, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Vendedores/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadProdutoVendedoresSempre: function(idProduto, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Vendedores')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoCompra: function(idProduto, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Ano/'+ano+'/HistoricoValoresCompra')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoMargem: function(idProduto, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Ano/'+ano+'/HistoricoValoresMargem')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoVenda: function(idProduto, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Produtos/Perfil/'+idProduto+'/Ano/'+ano+'/HistoricoValoresVenda')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }



   }
});
