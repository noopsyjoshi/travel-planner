function TripsShowCtrl($http, $scope, $state) {
  console.log('This is the trips show controller...');
  $http({
    method: 'GET',
    url: `/api/trips/${$state.params.id}`
  })
    .then(res => {
      $scope.trip = res.data;
    });
}

export default TripsShowCtrl;
