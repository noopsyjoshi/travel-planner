function TripsShowCtrl($http, $scope, $state) {
  console.log('This is the trips show controller...');
  $http({ // made a request to get the city from trips
    method: 'GET',
    url: `/api/trips/${$state.params.id}`
  })
    .then(res => {
      $scope.trip = res.data; // made a request back to get some data
    });
}

export default TripsShowCtrl;
