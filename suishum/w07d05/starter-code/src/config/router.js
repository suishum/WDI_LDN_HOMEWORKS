Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('ordersIndex', {
      url: '/orders',
      templateUrl: 'views/orders/index.html',
      controller: 'OrdersIndexCtrl as ordersIndex'
    })
    .state('ordersNew', {
      url: '/orders/new',
      templateUrl: 'views/orders/new.html',
      controller: 'OrdersNewCtrl as ordersNew'
    });

  $urlRouterProvider.otherwise('/orders');
  
}

export default Router;
