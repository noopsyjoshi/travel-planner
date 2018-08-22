/* global L */

function Map() {
  return { // Return the object from the database

    restrict: 'A', // Chooses directive type // A - sets functionality to DOM element
    link($scope, $element) { // $scope - is where the dom element exists. $element - is the DOM element itself

      const domElement = $element[0]; // Creates a DOM element
      $scope.map = L.map(domElement);

      // MAP SETTINGS
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18, // sets zoom level
        id: 'mapbox.satellite', // sets map view type
        accessToken: 'your.mapbox.access.token'
      }).addTo($scope.map); // map is ready for use

      // // MARKER PARAMETERS
      $scope.greenIcon = L.icon({
        iconSize: [100, 100], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
    }
  };
}

export default Map;
