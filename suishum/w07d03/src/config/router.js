Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('dogsIndex', {
      url: '/dogs',
      templateUrl: 'views/dogs/index.html',
      controller: 'DogsIndexCtrl as dogsIndex'
    })
    .state('dogsShow', {
      url: '/dogs/:id',
      templateUrl: 'views/dogs/show.html',
      controller: 'DogsShowCtrl as dogsShow'
    })
    .state('dogsNew', {
      url: '/dogs/new',
      templateUrl: 'views/dogs/new.html',
      controller: 'DogsNewCtrl as dogsNew'
    })
    .state('dogsEdit', {
      url: '/dogs/:id/edit',
      templateUrl: 'views/dogs/edit.html',
      controller: 'DogsEditCtrl as dogsEdit'
    })
    .state('dogsHome', {
      url: '/',
      templateUrl: 'views/dogs/home.html'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
