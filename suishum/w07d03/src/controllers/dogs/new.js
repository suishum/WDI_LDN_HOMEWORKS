DogsNewCtrl.$inject = ['Dog', '$state'];

function DogsNewCtrl(Dog, $state){
  this.newDog = {};

  function handleSubmit() {
    Dog.create(this.newDog)
      .then(() => $state.go('dogsIndex'));
  }

  this.handleSubmit = handleSubmit;

}

export default DogsNewCtrl;
