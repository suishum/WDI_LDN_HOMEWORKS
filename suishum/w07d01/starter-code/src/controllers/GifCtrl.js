GifCtrl.$inject = ['$http'];

function GifCtrl($http) {

  this.gifArray = [];
  this.searchQuery = '';
  this.number = 25;

  // FUNCTIONS
  function handleSubmit() {
    // convert search query so it is url friendly
    this.searchQuery = this.searchQuery.split(' ').join('+');
    // new get request with updated search query from form input
    $http.get(`http://api.giphy.com/v1/gifs/search?q=${this.searchQuery}&api_key=YLYnNs7mGjWq8kmTFGJwDD22m5XNn8sl&limit=${this.number}`)
      .then(res => {
        this.gifArray = res.data.data;
      });
    // clear the search query
    this.searchQuery = '';
  }
  this.handleSubmit = handleSubmit;

  function plusTen() {
    this.number += 10;
    if (this.searchQuery === '') {
      $http.get(`http://api.giphy.com/v1/gifs/search?q=trending&api_key=YLYnNs7mGjWq8kmTFGJwDD22m5XNn8sl&limit=${this.number}`)
        .then(res => {
          this.gifArray = res.data.data;
        });
    } else {
      $http.get(`http://api.giphy.com/v1/gifs/search?q=${this.searchQuery}&api_key=YLYnNs7mGjWq8kmTFGJwDD22m5XNn8sl&limit=${this.number}`)
        .then(res => {
          this.gifArray = res.data.data;
        });
    }
  }
  this.plusTen = plusTen;

  // GET STUFF ON LOAD
  $http.get(`http://api.giphy.com/v1/gifs/search?q=trending&api_key=YLYnNs7mGjWq8kmTFGJwDD22m5XNn8sl&limit=${this.number}`)
    .then(res => {
      this.gifArray = res.data.data;
    });

}

export default GifCtrl;
