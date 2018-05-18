Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('placesIndex', {
      url: '/places',
      templateUrl: 'views/places/index.html',
      controller: 'PlacesIndexCtrl as placesIndex'
    })
    .state('placesNew', {
      url: '/places/new',
      templateUrl: 'views/places/new.html',
      controller: 'PlacesNewCtrl as placesNew'
    })
    .state('placesShow', {
      url: '/places/:id',
      templateUrl: 'views/places/show.html',
      controller: 'PlacesShowCtrl as placesShow'
    })
    .state('placesEdit', {
      url: '/places/:id/edit',
      templateUrl: 'views/places/edit.html',
      controller: 'PlacesEditCtrl as placesEdit'
    });

  $urlRouterProvider.otherwise('/places');
}

export default Router;
