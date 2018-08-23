function TripsShowCtrl($http, $scope, $state) {
  console.log('This is the trips show controller...');
  $http({ // made a request to get the city from trips
    method: 'GET',
    url: `/api/trips/${$state.params.id}`
  })
    .then(res => {
      console.log('here is the data we are using =>', res.data.activities.sort((a, b) => b.dayNumber + a.dayNumber));
      $scope.trip = res.data; // made a request back to get some data
    });
}

export default TripsShowCtrl;
