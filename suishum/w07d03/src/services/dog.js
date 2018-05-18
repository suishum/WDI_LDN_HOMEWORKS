Dog.$inject = ['$http'];

function Dog($http) {


  function find() {
    return $http.get('/api/dogs');
  }

  function findById(id) {
    return $http.get(`/api/dogs/${id}`);
  }

  function create(dog) {
    return $http.post('/api/dogs', dog);
  }

  function update(dog) {
    return $http.put(`/api/dogs/${dog._id}`, dog);
  }

  function remove(dog) {
    return $http.delete(`/api/dogs/${dog._id}`);
  }

  this.find = find;
  this.findById = findById;
  this.create = create;
  this.update = update;
  this.remove = remove;


}


export default Dog;
