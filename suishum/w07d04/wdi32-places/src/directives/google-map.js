/* global google */

function googleMap() {
  return {
    restrict: 'E',
    template: '<div class="google-map"></div>',
    replace: true,
    scope: {
      center: '=',
      zoom: '='
    },
    link($scope, $element) {
      // this returns undefined (without $scope.$watch) because google maps is trying to load the map before the DOM content had been loaded. This means we need to chain a $scope.$watch (see line 19)
      console.log($scope.center);
      const map = new google.maps.Map($element[0], {
        zoom: $scope.zoom,
        center: $scope.center
      });
      $scope.$watch('center', () => {
        map.setCenter($scope.center);
        // now $scope.center returns an object!
        console.log($scope.center);
      }, true); // passing true as the third argument here is for 'deep watch'?
    }
  };
}

export default googleMap;
