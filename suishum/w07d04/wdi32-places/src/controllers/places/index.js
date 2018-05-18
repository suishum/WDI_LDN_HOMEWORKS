PlacesIndexCtrl.$inject = ['Place', 'filterFilter', '$scope'];
function PlacesIndexCtrl(Place, filterFilter, $scope) {
  // assign this to vm, vm is convention
  const vm = this;
  //set a default value when it loads
  vm.rating = '';
  vm.price = '';

  vm.favPlaces = [];
  Place.find()
    .then(res => vm.favPlaces = res.data)
    .then(filterPlaces);
  // .then(() => filterPlaces()); is the same as the line above

  function filterPlaces() {
    const params = {};
    if(vm.name) params.name = vm.name;
    if(vm.rating) params.rating = vm.rating;
    vm.filtered = filterFilter(vm.favPlaces, params);

    // pass true in to filter by exact match
    if(vm.price) vm.filtered = filterFilter(vm.filtered, { price: vm.price }, true);
  }
  // scope is used to interact with the view
  // when there is a change, run filterPlaces
  // $scope.$watch(() => vm.name, filterPlaces);
  // $scope.$watch(() => vm.rating, filterPlaces);
  // $scope.$watch(() => vm.price, filterPlaces);
  $scope.$watchGroup([
    () => vm.name,
    () => vm.rating,
    () => vm.price
  ], filterPlaces);

}

export default PlacesIndexCtrl;
