app.factory('FornecedoresService', function($http) {
   return {
      getCurvaAbc: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/ComprasFornecedores/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval+'/Historico')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getCurvaAbcHead: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/ComprasFornecedoresHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getAll: function(dataInicio, dataFim, status) {
            //return the promise directly.
          
            return $http.get('http://auper.local/Fornecedores/De/'+dataInicio+'/Ate/'+dataFim+'/Status/'+status)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
       loadFornecedoresPositivos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Positivos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
         loadFornecedoresRegulares: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Regulares/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedoresNegativos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Negativos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadFornecedoresRecuperados: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Recuperados/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadFornecedoresNovos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Novos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedoresComparativo: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Comparativo/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedoresComparativoHead: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/ComparativoHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedorComprasMensal: function(idFornecedor, ano, qtdValores) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/'+qtdValores+'/Mensal/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedorInfo: function(idFornecedor, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/Resumo')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedorProdutos: function(idFornecedor, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/Produtos/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadFornecedorProdutosSempre: function(idFornecedor, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/Produtos')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        
        loadHistoricoCompra: function(idFornecedor, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/Ano/'+ano+'/HistoricoValoresCompra')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoMargem: function(idFornecedor, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/Ano/'+ano+'/HistoricoValoresMargem')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoVenda: function(idFornecedor, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Fornecedores/Perfil/'+idFornecedor+'/Ano/'+ano+'/HistoricoValoresVenda')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }


   }
});
