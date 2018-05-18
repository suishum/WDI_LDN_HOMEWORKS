DogsShowCtrl.$inject = ['Dog', '$state'];
function DogsShowCtrl(Dog, $state) {
  this.dog = {};

  Dog.findById($state.params.id)
    .then(res => this.dog = res.data);

  function remove() {
    Dog.remove(this.dog)
      .then(() => $state.go('dogsIndex'));
  }

  this.remove = remove;

}

export default DogsShowCtrl;
