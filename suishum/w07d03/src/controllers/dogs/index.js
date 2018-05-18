DogsIndexCtrl.$inject = ['Dog', 'filterFilter', 'rangeFilter', '$scope'];

function DogsIndexCtrl(Dog, filterFilter, rangeFilter, $scope) {
  const vm = this;

  vm.coolDogs = [];
  Dog.find()
    .then(res => vm.coolDogs = res.data)
    .then(filterDogs);


  function filterDogs() {
    const params = {};

    if(vm.name) params.name = vm.name;
    vm.filtered = filterFilter(vm.coolDogs, params);
    if(vm.min && vm.max) vm.filtered = rangeFilter(vm.filtered, { eyebrowLength: [vm.min, vm.max] });
  }

  $scope.$watchGroup([
    () => vm.name,
    () => vm.min,
    () => vm.max
  ], filterDogs);

}


export default DogsIndexCtrl;
