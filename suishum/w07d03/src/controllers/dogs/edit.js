DogsEditCtrl.$inject = ['Dog', '$state'];

function DogsEditCtrl(Dog, $state) {
  console.log('edit controller loaded');
  this.dog = {};

  Dog.findById($state.params.id)
    .then(res => this.dog = res.data);

  function handleSubmit() {
    Dog.update(this.dog);
    $state.go('dogsShow', { id: $state.params.id });
  }

  this.handleSubmit = handleSubmit;

}

export default DogsEditCtrl;
