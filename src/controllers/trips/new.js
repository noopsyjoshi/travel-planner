function TripsNewCtrl($scope, $http, $rootScope) {
  console.log('into the new trip controller...');

  // Trip Duration Variables
  $scope.durations = [3, 7, 10];

  // This is the span that will display the user's choice
  const selectedDurationSpan = document.querySelector('#tripDuration');

  // This will display the type of accomodation user has selected
  const selectedAccomodationType = document.querySelector('#accomodationType');

  // This will display the interests in the html
  const selectedInterests = document.querySelector('#interests');

  // Refactored!!!!!!
  $scope.getDuration = function($event) {
    console.log($event.target.getAttribute('durationVal'));
    const selectedDuration = $event.target.getAttribute('durationVal');
    // $rootScope.trip should reflect your model
    $rootScope.trip.duration = selectedDuration;
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
