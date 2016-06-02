'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {

          $urlRouterProvider
              .otherwise('/app/dashboard');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
               .state('produtosdetalhes', {
                  url: '/produto/:idProduto',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/produtos/views/perfil.html',
                            controller: 'ProdutosPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/produtos/services/ProdutosService.js',
                          'bundles/produtos/controllers/ProdutosPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
                .state('app.produtosdetalhes', {
                  url: '/produto/:idProduto',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/produtos/views/perfil.html',
                            controller: 'ProdutosPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/produtos/services/ProdutosService.js',
                          'bundles/produtos/controllers/ProdutosPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('app.fornecedoresdetalhes', {
                  url: '/fornecedor/:idFornecedor',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/fornecedores/views/perfil.html',
                            controller: 'FornecedoresPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/fornecedores/services/FornecedoresService.js',
                          'bundles/fornecedores/controllers/FornecedoresPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('fornecedoresdetalhes', {
                  url: '/fornecedor/:idFornecedor',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/fornecedores/views/perfil.html',
                            controller: 'FornecedoresPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/fornecedores/services/FornecedoresService.js',
                          'bundles/fornecedores/controllers/FornecedoresPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('app.vendedoresdetalhes', {
                  url: '/vendedor/:idVendedor',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/vendedores/views/perfil.html',
                            controller: 'VendedoresPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/vendedores/services/VendedoresService.js',
                          'bundles/vendedores/controllers/VendedoresPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('vendedoresdetalhes', {
                  url: '/vendedor/:idVendedor',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/vendedores/views/perfil.html',
                            controller: 'VendedoresPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/vendedores/services/VendedoresService.js',
                          'bundles/vendedores/controllers/VendedoresPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
                .state('clientesdetalhes', {
                  url: '/cliente/:idCliente',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/clientes/views/perfil.html',
                            controller: 'ClientesPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/clientes/services/ClientesService.js',
                          'bundles/clientes/controllers/ClientesPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
                 .state('app.clientesdetalhes', {
                  url: '/cliente/:idCliente',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/clientes/views/perfil.html',
                            controller: 'ClientesPerfilController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/clientes/services/ClientesService.js',
                          'bundles/clientes/controllers/ClientesPerfilController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('app.dashboard', {
                  url: '/dashboard',
                  //  templateUrl: 'bundles/orcamentos/view/Index.html',
                    templateUrl: 'bundles/dashboard/views/default.html',
                              controller: 'DashboardController',
                              resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load([
                            'bundles/dashboard/services/DashboardService.js',
                            'bundles/dashboard/controllers/DashboardController.js',
                            'js/controllers/bootstrap.js',

                          ]).then(function(){
                              return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                          });
                      }]
                    }
              })
              .state('app.orcamentos', {
                  url: '/orcamentos',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/orcamentos/views/Default.html',
                            controller: 'OrcamentoController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/orcamentos/service/OrcamentoService.js',
                          'bundles/orcamentos/controller/OrcamentoController.js',
                          'js/controllers/bootstrap.js',
                          'ui.select',
                          'smart-table'
                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js');
                        });
                    }]
                  }
              })
              .state('app.vendas', {
                  url: '/vendas',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/vendas/views/default.html',
                            controller: 'VendasController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/vendas/services/VendasService.js',
                          'bundles/vendas/controllers/VendasController.js',
                          'js/filters/utils.js',
                          'js/controllers/bootstrap.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
               .state('app.clientestodos', {
                  url: '/clientestodos',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/clientes/views/todos.html',
                            controller: 'ClientesTodosController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/clientes/services/ClientesService.js',
                          'bundles/clientes/controllers/ClientesTodosController.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('app.clientesabc', {
                  url: '/clientesabc',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/clientes/views/abc.html',
                            controller: 'ClientesAbcController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/clientes/services/ClientesService.js',
                          'bundles/clientes/controllers/ClientesAbcController.js',
                          'js/filters/utils.js',
                          'js/directives/abcclickdirective.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
             
               .state('app.clientesstatus', {
                  url: '/clientesstatus',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/clientes/views/status.html',
                            controller: 'ClientesStatusController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/clientes/services/ClientesService.js',
                          'bundles/clientes/controllers/ClientesStatusController.js',
                          'js/directives/statusclickdirective.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
              .state('app.produtosabc', {
                  url: '/produtosabc',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/produtos/views/abc.html',
                            controller: 'ProdutosAbcController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/produtos/services/ProdutosService.js',
                          'bundles/produtos/controllers/ProdutosAbcController.js',
                          'js/filters/utils.js',
                          'js/directives/abcclickdirective.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
             
               .state('app.produtosstatus', {
                  url: '/produtosstatus',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/produtos/views/status.html',
                            controller: 'ProdutosStatusController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/produtos/services/ProdutosService.js',
                          'bundles/produtos/controllers/ProdutosStatusController.js',
                          'js/directives/statusclickdirective.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
               
              .state('app.fornecedoresabc', {
                  url: '/fornecedoresabc',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/fornecedores/views/abc.html',
                            controller: 'FornecedoresAbcController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/fornecedores/services/FornecedoresService.js',
                          'bundles/fornecedores/controllers/FornecedoresAbcController.js',
                          'js/filters/utils.js',
                          'js/directives/abcclickdirective.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
             
               .state('app.fornecedoresstatus', {
                  url: '/fornecedoresstatus',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/fornecedores/views/status.html',
                            controller: 'FornecedoresStatusController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/fornecedores/services/FornecedoresService.js',
                          'bundles/fornecedores/controllers/FornecedoresStatusController.js',
                          'js/directives/statusclickdirective.js',
                          'js/filters/utils.js',
                          'ui.select'

                        ]);
                    }]
                  }
              })
                .state('app.vendedoresabc', {
                  url: '/vendedoresabc',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/vendedores/views/abc.html',
                            controller: 'VendedoresAbcController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/vendedores/services/VendedoresService.js',
                          'bundles/vendedores/controllers/VendedoresAbcController.js',
                          'js/filters/utils.js',
                          'js/directives/abcclickdirective.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
              .state('app.relatoriosDiarios', {
                  url: '/relatoriosDiarios',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/relatoriosDiarios/view/Default.html',
                            controller: 'RelatoriosDiariosController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/relatoriosDiarios/service/RelatoriosDiariosService.js',
                          'bundles/relatoriosDiarios/controller/RelatoriosDiariosController.js',
                          'js/controllers/bootstrap.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
			   .state('app.cronograma', {
                  url: '/cronograma',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/cronograma/view/Default.html',
                            controller: 'CronogramaController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/Cronograma/controller/CronogramaController.js',
                          'js/controllers/bootstrap.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })
              .state('app.teste', {
                  url: '/teste',
                  templateUrl: 'tpl/teste.html',
                            controller: 'testeCtrl',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/services/testeService.js','js/controllers/teste.js', 'ui.select']);
                    }]
                  }
              })
              .state('app.estoqueabc', {
                  url: '/estoqueabc',
                //  templateUrl: 'bundles/orcamentos/view/Index.html',
                  templateUrl: 'bundles/estoque/views/abc.html',
                            controller: 'EstoqueAbcController',
                            resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load([
                          'bundles/estoque/services/EstoqueService.js',
                          'bundles/estoque/controllers/EstoqueAbcController.js',
                          'js/filters/utils.js',
                          'js/directives/abcclickdirective.js',

                        ]).then(function(){
                            return $ocLazyLoad.load('js/controllers/table.js',                          'js/directives/ui-jq.js');
                        });
                    }]
                  }
              })

      }
    ]
  );
