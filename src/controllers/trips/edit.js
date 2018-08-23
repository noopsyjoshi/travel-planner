function TripsEditCtrl() {
  console.log('This is the trips edit controller...');
}

export default TripsEditCtrl;


// TO BE REMOVED AFTER I FINISHED USING
  // const markers = [];
  // let map;
  //
  // function Map($http) {
  //   return {
  //     restrict: 'A', // can only be an attribute type directive
  //     link($scope, $element) { // $element is not the DOM element itself!
  //       const domElement = $element[0];
  //       map = L.map(domElement);
  //       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  //       }).addTo(map);
  //       // Our map is ready to use
  //       // (Note: It still needs position and zoom level)
  //       map.on('click', handleMapClick);
  //       addGeolocationMarker();
  //       $scope.$watch('whiskey', () => addWhiskeyMarker());
  //       $scope.$watchGroup(['geolocationMarker', 'whiskeyMarker'], () => drawLineFromUserToWhiskey());
  //
  //       function addGeolocationMarker() {
  //         // Get our location and add a marker
  //         if (navigator.geolocation) {
  //           navigator.geolocation.getCurrentPosition(position => {
  //             const iconUrl = 'https://png.icons8.com/color/1600/person-male.png';
  //             const markerOptions = {
  //               icon: L.icon({
  //                 iconUrl: iconUrl,
  //                 iconSize: [35, 40]
  //               })
  //             };
  //             const markerLocation = [position.coords.latitude, position.coords.longitude];
  //             const marker = L.marker(markerLocation, markerOptions).addTo(map);
  //             marker.bindPopup('<p>You are here</p>');
  //             $scope.geolocationMarker = marker;
  //             // NOTE: Because we're using a non-Angular thing (navigator.geolocation)
  //             //       we need to manually refresh the $scope, otherwise Angular doesn't
  //             //       know it's been updated. This is done as follows:
  //             $scope.$apply();
  //           }, err => console.log(err), { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
  //         }
  //       }
  //
  //       function addWhiskeyMarker() {
  //         if($scope.whiskey) {
  //           $http({
  //             method: 'GET',
  //             url: `https://nominatim.openstreetmap.org/search/${$scope.whiskey.originCountry}?format=json`
  //           })
  //             .then(res => {
  //               const place = res.data.sort((a, b) => a.importance < b.importance)[0];
  //               $scope.place = place;
  //               addMarkerFromNominatimPlace(place);
  //               zoomMapToNominatimBoundingBox(place.boundingbox);
  //             });
  //         }
  //       }
  //
  //       function addMarkerFromNominatimPlace(place) {
  //         const marker = L.marker([place.lat, place.lon]).addTo(map);
  //         marker.bindPopup(`<p>${place.display_name}</p>`);
  //         $scope.whiskeyMarker = marker;
  //       }
  //
  //       function drawLineFromUserToWhiskey() {
  //         if($scope.geolocationMarker && $scope.whiskeyMarker) {
  //           const positions = [$scope.geolocationMarker.getLatLng(), $scope.whiskeyMarker.getLatLng()];
  //           L.polyline(positions, { color: '#d93f2a' }).addTo(map);
  //         }
  //       }
  //     }
  //   };
  //
  //   // =================================================================
  //   // These functions are here because they don't need $http or $scope.
  //   // In other words, they are not specific to Angular in any way.
  //   // =================================================================
  //   function handleMapClick(event) {
  //     const marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map);
  //     popupFromLatLng(marker, event.latlng);
  //     markers.push(marker);
  //     zoomToMarkers();
  //   }
  //
  //   function popupFromLatLng(marker, latlng) {
  //     $http({
  //       method: 'GET',
  //       url: 'https://nominatim.openstreetmap.org/reverse',
  //       params: { lat: latlng.lat, lon: latlng.lng, format: 'json' }
  //     })
  //       .then(res => {
  //         marker.bindPopup(`<p>${res.data.display_name}</p>`);
  //       });
  //   }
  //
  // }
  //
  // function zoomToMarkers() {
  //   if(markers.length > 2) {
  //     const latLngs = markers.map(marker => marker.getLatLng());
  //     const bounds = L.latLngBounds(latLngs);
  //     map.flyToBounds(bounds, { padding: [20, 20] });
  //   }
  // }
  //
  // function zoomMapToNominatimBoundingBox(bb) {
  //   map.fitBounds([
  //     [ bb[0], bb[2] ], // Top left
  //     [ bb[1], bb[3] ]  // Bottom right
  //   ]);
  // }
  //
  // export default Map;
