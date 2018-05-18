Order.$inject = ['$http'];

function Order($http) {

  function find() {
    return $http.get('/api/orders');
  }

  function create(order) {
    return $http.post('/api/orders', order);
  }

  this.find = find;
  this.create = create;
}

export default Order;

// Place.$inject = ['$http'];
//
// function Place($http) {
//
//   function find() {
//     return $http.get('/api/places');
//   }
//
//   function create(place) {
//     return $http.post('/api/places', place);
//   }
//
//   function findById(id) {
//     return $http.get(`/api/places/${id}`);
//   }
//
//   function update(place) {
//     return $http.put(`/api/places/${place._id}`, place);
//   }
//
//   function remove(place) {
//     return $http.delete(`/api/places/${place._id}`);
//   }
//
//   function getForecast(lat, lng) {
//     return $http.get(`https://api.darksky.net/forecast/59f529795678a5f972dd946595c5a34b/${lat},${lng}`);
//   }
//
//   this.find = find;
//   this.create = create;
//   this.findById = findById;
//   this.update = update;
//   this.remove = remove;
//   this.getForecast = getForecast;
// }
//
// export default Place;
