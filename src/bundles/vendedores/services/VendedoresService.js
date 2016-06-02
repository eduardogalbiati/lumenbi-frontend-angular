app.factory('VendedoresService', function($http) {
   return {
      getCurvaAbc: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/VendasVendedores/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval+'/Historico')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getCurvaAbcHead: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/VendasVendedoresHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getAll: function(dataInicio, dataFim, status) {
            //return the promise directly.
          
            return $http.get('http://auper.local/Vendedores/De/'+dataInicio+'/Ate/'+dataFim+'/Status/'+status)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
       loadVendedoresPositivos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Positivos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
         loadVendedoresRegulares: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Regulares/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedoresNegativos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Negativos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadVendedoresRecuperados: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Recuperados/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadVendedoresNovos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Novos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedoresComparativo: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Comparativo/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedoresComparativoHead: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/ComparativoHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedorVendasMensal: function(idVendedor, ano, qtdValores) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/'+qtdValores+'/Mensal/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedorInfo: function(idVendedor, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Resumo')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedorProdutos: function(idVendedor, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Produtos/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedorProdutosSempre: function(idVendedor, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Produtos')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedorClientes: function(idVendedor, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Clientes/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadVendedorClientesSempre: function(idVendedor, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Clientes')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoMargem: function(idVendedor, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Ano/'+ano+'/HistoricoValoresMargem')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoVenda: function(idVendedor, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Vendedores/Perfil/'+idVendedor+'/Ano/'+ano+'/HistoricoValoresVenda')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }


   }
});
