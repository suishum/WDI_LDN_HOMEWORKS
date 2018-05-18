PlacesNewCtrl.$inject = ['Place', '$state'];
function PlacesNewCtrl(Place, $state) {
  this.newPlace = {
    location: {
      lat: 0,
      lng: 0
    }
  };

  function handleSubmit() {
    Place.create(this.newPlace)
      .then(() => $state.go('placesIndex'));
  }

  this.handleSubmit = handleSubmit;
}

export default PlacesNewCtrl;
