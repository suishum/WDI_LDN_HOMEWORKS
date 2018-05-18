Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('order', {
      url: '/order',
      templateUrl: 'views/order.html',
      controller: 'OrderCtrl as order'
    });

  $urlRouterProvider.otherwise('/order');
}

export default Router;
