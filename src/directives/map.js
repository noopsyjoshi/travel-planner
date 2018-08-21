/* global L */

function Map($http) {
  return { // Return the object from the database

    restrict: 'A', // Chooses directive type // A - sets functionality to DOM element
    link($scope, $element) { // $scope - is where the dom element exists. $element - is the DOM element itself

      const domElement = $element[0]; // Creates a DOM element
      const map = L.map(domElement);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);

      const doge = L.icon({
        iconUrl: 'http://www.stickpng.com/assets/thumbs/5845e69dfb0b0755fa99d7ef.png',
        iconSize: [100, 100], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
      });

      // Our map is ready to use
      // (Note: it still needs position and zoom level)
      map.on('click', event => {
        console.log(event.latlng);
        L.marker([event.latlng.lat, event.latlng.lng], {icon: doge}).addTo(map);
      });

      // get our location and add a marker
      // if will ask the user if they want to allow user to share location if true it will run if not it wont
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const marker = L.marker([position.coords.latitude, position.coords.longitude], {icon: doge}).addTo(map);
          marker.bindPopup('<p>Im here</p>');
        });
      }

      // need to wait for whiskey to load first. saying when this watch finishes of whikey then run the function
      $scope.$watch('whiskey', function() {
        if($scope.whiskey) {
          $http({
            method: 'GET',
            url: `https://nominatim.openstreetmap.org/search/${$scope.whiskey.originCountry}?format=json`
          })
          // then we get a response hopefully. res.data is all the data
            .then(res => {
              const place = res.data.sort((a, b) => a.importance < b.importance)[0]; // <-- this is javascript sorting
              // place is now available! set it on the $scope
              $scope.place = place;
              // map.setView([place.lat, place.lon], 5); // number 5 means zoom level
              const bb = place.boundingbox; // getting this from insomnia
              map.fitBounds([
                [ bb[0], bb[2] ], // top left // brackets extracts element from the arrya
                [ bb[1], bb[3] ] // bottom right
              ]);
              const marker = L.marker([place.lat, place.lon]).addTo(map);
              marker.bindPopup(`<p>${place.display_name}</p>`)
            });
        }
      });
    }
  };
}

export default Map;
