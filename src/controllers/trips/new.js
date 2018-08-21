function TripsNewCtrl($scope, $http, $rootScope, $state) {
  console.log('into the new trip controller...');

  // Trip Duration Variables
  $scope.durations = [3, 7, 10];
  $scope.interests = ['music', 'historical landmarks', 'museums'];

  // Accomodation Type Variables
  $scope.accomodationTypes = ['Hotel', 'Hostel', 'Bed and Breakfast'];

  // Location
  $scope.getLocation = function() {
    console.log('into the getlocation function');
    $rootScope.trip.city = $scope.trip.city;
    console.log('rootscope and scope', $scope.trip.city, $rootScope.trip.city);
  };

  // Duration
  // TODO: Add toggle class
  $scope.toggleDuration = function($event) {
    // get the value of the button that is clicked
    const selectedDuration = $event.target.getAttribute('durationVal');
    // $rootScope.trip should reflect your model
    // $rootScope.trip is defined as an empty object in the MainCtrl so that it doesn't get set to be empty every time the new controller runs
    $rootScope.trip.duration = selectedDuration;
    console.log('rootScope.trip', $rootScope.trip);
  };

  // Accomodation Type
  $scope.toggleAccomodationType = function($event) {
    let accomodationTypes = $rootScope.trip.accomodationTypes;
    const selectedAccomodationType = $event.target.getAttribute('accomodationTypeVal');
    if(accomodationTypes.includes(selectedAccomodationType)) {
      // remove interest
      console.log('removing accomodation type...');
      accomodationTypes = accomodationTypes.filter(accomodationType => accomodationType !== selectedAccomodationType);
    } else {
      console.log('adding accomodationType...');
      // add interest
      accomodationTypes.push(selectedAccomodationType); // TODO: the list of activities doesn't append any more categories...
    }
    $rootScope.trip.accomodationTypes = accomodationTypes;
    console.log($rootScope.trip);
  };

  $scope.getBudget = function() {
    console.log('into the getBudget function');
    $rootScope.trip.budget = $scope.trip.budget;
    console.log('rootScope', $rootScope.trip);
  };

  $scope.toggleInterest = function($event) {
    let tripInterests = $rootScope.trip.interests;
    const selectedInterest = $event.target.getAttribute('interestVal');
    $scope.activities = $scope.activities.filter(activity =>  activity.categories.includes(selectedInterest));
    if(tripInterests.includes(selectedInterest)) {
      // remove interest
      console.log('removing interest...');
      tripInterests = tripInterests.filter(interest => interest !== selectedInterest);
    } else {
      console.log('adding interest...');
      // add interest
      tripInterests.push(selectedInterest); // TODO: the list of activities doesn't append any more categories...
    }
    $rootScope.trip.interests = tripInterests;
    console.log($rootScope.trip);
  };

  // TODO: add accomodation into model/seeds




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
