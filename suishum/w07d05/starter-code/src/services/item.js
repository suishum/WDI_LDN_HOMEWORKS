Item.$inject = ['$http'];

function Item($http) {

  function find() {
    return $http.get('/api/items');
  }

  // function create(order) {
  //   return $http.post('/api/orders', order);
  // }

  this.find = find;
  // this.create = create;
}

export default Item;
