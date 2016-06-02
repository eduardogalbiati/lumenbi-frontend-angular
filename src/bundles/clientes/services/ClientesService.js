app.factory('ClientesService', function($http) {
   return {
      getCurvaAbc: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/VendasClientes/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval+'/Historico')
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getCurvaAbcHead: function(mes, ano, interval) {
            //return the promise directly.
            return $http.get('http://auper.local/CurvaAbc/VendasClientesHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+interval)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
      getAll: function(dataInicio, dataFim, status) {
            //return the promise directly.
          
            return $http.get('http://auper.local/Clientes/De/'+dataInicio+'/Ate/'+dataFim+'/Status/'+status)
                      .then(function(result) {
                           //resolve the promise as the data
                           return result.data
                       });
      },
       loadClientesPositivos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Positivos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
         loadClientesRegulares: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Regulares/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClientesNegativos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Negativos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadClientesRecuperados: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Recuperados/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },

        loadClientesNovos: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Novos/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClientesComparativo: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Comparativo/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClientesComparativoHead: function(mes, ano, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/ComparativoHead/Mes/'+mes+'/Ano/'+ano+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClienteVendasMensal: function(idCliente, ano, qtdValores) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/'+qtdValores+'/Mensal/Ano/'+ano)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClienteInfo: function(idCliente, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Resumo')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClienteProdutos: function(idCliente, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Produtos/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClienteProdutosSempre: function(idCliente, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Produtos')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClienteVendedores: function(idCliente, ano, mes, intervalo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Vendedores/Ano/'+ano+'/Mes/'+mes+'/Intervalo/'+intervalo)
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadClienteVendedoresSempre: function(idCliente, periodo) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Vendedores')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoCompra: function(idCliente, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Ano/'+ano+'/HistoricoValoresCompra')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoMargem: function(idCliente, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Ano/'+ano+'/HistoricoValoresMargem')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        },
        loadHistoricoVenda: function(idCliente, ano) {
             //return the promise directly.
             return $http.get('http://auper.local/Clientes/Perfil/'+idCliente+'/Ano/'+ano+'/HistoricoValoresVenda')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data
                        });
        }


   }
});
