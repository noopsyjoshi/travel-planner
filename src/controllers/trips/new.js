function TripsNewCtrl($scope, $http, $rootScope) {
  console.log('into the new trip controller...');

  $rootScope.trip = {};
  // Trip Duration Variables
  $scope.durations = [3, 7, 10];
  $scope.interests = ['music', 'historical landmarks', 'museums'];

  // Accomodation Type Variables
  $scope.accomodationTypes = ['Hotel', 'Hostel', 'Bed and Breakfast'];

  // Refactored!!!!!!
  // Duration
  $scope.getDuration = function($event) {
    console.log($event.target.getAttribute('durationVal'));
    const selectedDuration = $event.target.getAttribute('durationVal');
    // $rootScope.trip should reflect your model
    $rootScope.trip.duration = selectedDuration;
    console.log('rootScope.duration', $rootScope.trip);
  };

  // Accomodation Type
  $scope.getAccomodationType = function($event) {
    console.log($event.target.getAttribute('accomodationTypeVal'));
    const selectedAccomodationType = $event.target.getAttribute('accomodationTypeVal');
    $rootScope.trip.accomodationType = selectedAccomodationType; // TODO: selectedAccomodationType isn't being pushed into the array
    console.log('rootScope.trip', $rootScope.trip);
  };

  $scope.getInterest = function($event) {
    console.log($event.target.getAttribute('interestVal'));
    const selectedInterest = $event.target.getAttribute('interestVal');
    $scope.activities = $scope.activities.filter(activity =>  activity.categories.includes(selectedInterest));
    console.log('scope.activities is', $scope.activities);
    $rootScope.trip.interest = selectedInterest; // TODO: the list of activities doesn't append any more categories...
  };

  // TODO: add accomodation into model/seeds


  $scope.getBudget = function() {
    
  };


  // Make a request to the database to get the activities based on interests
  $http({
    method: 'GET',
    url: '/api/activities'
  })
  // The activities information is in the data section in console
    .then(res => {
      console.log('Activities are', res.data);
      $scope.activities = res.data;
      $scope.activities.categories = res.data.categories;
    });
}

export default TripsNewCtrl;
