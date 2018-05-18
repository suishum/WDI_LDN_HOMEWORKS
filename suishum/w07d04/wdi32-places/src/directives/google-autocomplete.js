/* global google */

function googleAutocomplete() {
  return {
    restrict: 'C',
    scope: {
      location: '=',
      address: '='
    },
    // template: '<input class="google-autocomplete"></input>',
    // replace: true,
    link($scope, $element) {
      $scope.$watch('location', () => {
        // console.log($scope.location);
        // console.log($scope.address);
      });
      // console.log($element[0]);
      const inputElement = $element[0];
      // this is a google constructor function (cos capital and new), constructs an autocomplete tool.
      const autocomplete = new google.maps.places.Autocomplete(inputElement);
      // .addListener method only works with google autocomplete and maps
      // console.log(google.maps.places); // use this to check out all the functions on the contructor.
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        // console.log(autocomplete);
        // console.log(place);
        // console.log($scope);
        // our fields = information pulled from the place variable.
        // $scope.placesNew.newPlace.location.lat = place.geometry.location.lat();
        // $scope.placesNew.newPlace.location.lng = place.geometry.location.lng();
        // $scope.placesNew.newPlace.address = place.formatted_address;
        // AFTER ADDING ATTRIBUTES TO HTML (USING SCOPE), YOU CAN CHANGE THE ABOVE LINES TO LOOK LIKE THIS
        $scope.location.lat = place.geometry.location.lat();
        $scope.location.lng = place.geometry.location.lng();
        $scope.address = place.formatted_address;
        console.log(place.formatted_address);
      });
    }
  };
}

// FUNCTIONS TO TURN INTO DIRECTIVES
// function initialize() {
//   var input = document.getElementById('searchTextField');
//   new google.maps.places.Autocomplete(input);
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);

// function initialize() {
//     var input = document.getElementById('searchTextField');
//     var autocomplete = new google.maps.places.Autocomplete(input);
//     google.maps.event.addListener(autocomplete, 'place_changed', function () {
//         var place = autocomplete.getPlace();
//         document.getElementById('city2').value = place.name;
//         document.getElementById('cityLat').value = place.geometry.location.lat();
//         document.getElementById('cityLng').value = place.geometry.location.lng();
//         //alert("This function is working!");
//         //alert(place.name);
//        // alert(place.address_components[0].long_name);
//
//     });
// }
// google.maps.event.addDomListener(window, 'load', initialize);


export default googleAutocomplete;
