// THIS IS THE CONTROLLER RESPONSIBLE FOR CREATING A NEW TRIP

function TripsNewCtrl($scope, $http, $rootScope) {
  console.log('into the new trip controller...');

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// VARIABLES /////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.durations = [3, 7, 10];
  $scope.interests = ['music', 'historical landmarks', 'museums'];
  $scope.accommodationTypes = ['Hotel', 'Hostel', 'Bed and Breakfast'];

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// LOCATION  /////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.getLocation = function() {
    console.log('into the getlocation function');
    $rootScope.trip.city = $scope.trip.city;
    console.log('rootscope and scope', $scope.trip.city, $rootScope.trip.city);
  };

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// DURATION //////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // TODO: Add toggle class
  $scope.toggleDuration = function($event) {
    // get the value of the button that is clicked
    const selectedDuration = $event.target.getAttribute('durationVal');
    // $rootScope.trip should reflect your model
    // $rootScope.trip is defined as an empty object in the MainCtrl so that it doesn't get set to be empty every time the new controller runs
    $rootScope.trip.duration = selectedDuration;
    console.log('rootScope.trip', $rootScope.trip);
  };

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// ACCOMMODATION /////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.toggleAccommodation = function($event) {
    // Set filteredAccommodations to all the accommodations that we fetch from the seeds file (for test - 3)
    // $scope.accommodations is all accommodations from the db
    $scope.filteredAccommodations = $scope.accommodations;

    // accommodationTypes is the collection of the selected accommodations we have clicked on, eg - user can click on Hotels and Hostels
    let accommodationTypes = $rootScope.trip.accommodationTypes;

    // test
    console.log('this is $scope.filteredAccommodations ->', $scope.filteredAccommodations);

    // Get the selected accommodationType from user
    const selectedAccommodationType = $event.target.getAttribute('accommodationTypeVal');
    console.log('this is selectedAccommodationType ->', selectedAccommodationType); // works

    console.log('this is accommodationTypes', accommodationTypes);

    // if the array of selected types already includes the user's selected accommodation type, then remove it from the array
    // this is so that we don't have more than one type (ex. Hotels) in the same array
    if(accommodationTypes.includes(selectedAccommodationType)) {
      // remove accommodation type
      console.log('removing accommodation type...');
      accommodationTypes = accommodationTypes.filter(accommodation => accommodation !== selectedAccommodationType);
      console.log(accommodationTypes);
    } else {
      // add the accommodationType to the array of user selection
      console.log('adding accommodationType...');
      accommodationTypes.push(selectedAccommodationType);
      console.log(accommodationTypes);
    }
    //add the chosen accommodation to the rootScope so that it's everywhere
    $rootScope.trip.accommodationTypes = accommodationTypes;

    if(accommodationTypes.length !== 0) {
      // 1. Check all of the accommodations
      // 2. Check each accommodation has a type that matches the user's selected accommodation
      $scope.filteredAccommodations = $scope.filteredAccommodations.filter(accommodation =>  accommodation.categories.filter(category => accommodationTypes.includes(category)).length);
    }
    //$scope.filteredAccommodations is an array of the accommodations filtered by selected accommodation
    console.log('this is $scope.filteredAccommodations ->', $scope.filteredAccommodations);
  };


  // Display the selected accommodation from a list

  $scope.setSelectedAccommodation = function(index) {
    $scope.selectedAccommodation = index;
  };

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// BUDGET ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.getBudget = function() {
    console.log('into the getBudget function');
    $rootScope.trip.budget = $scope.trip.budget;
    console.log('rootScope', $rootScope.trip);
  };


  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////// INTEREST AND ACTIVITIES //////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // Interests and Activities
  $scope.toggleInterest = function($event) {
    // Set filteredActivities to all the activities
    $scope.filteredActivites = $scope.activities;

    let tripInterests = $rootScope.trip.interests;
    //tripInterests is the collection of the selected interests we have clicked on
    console.log('this is $scope.filteredActivites ->', $scope.filteredActivites);

    const selectedInterest = $event.target.getAttribute('interestVal');
    console.log('this is selectedInterest ->', selectedInterest);
    //selectedInterest is the one we clicked on

    if(tripInterests.includes(selectedInterest)) {
      // remove interest
      console.log('removing interest...');
      tripInterests = tripInterests.filter(interest => interest !== selectedInterest);
    } else {
      console.log('adding interest...');
      // add interest
      tripInterests.push(selectedInterest);
    }

    $rootScope.trip.interests = tripInterests;

    if(tripInterests.length !== 0) {
      // 1. Check all of the Activities
      // 2. Check each activity has a category that matches the user's selected interest
      $scope.filteredActivites = $scope.filteredActivites.filter(activity =>  activity.categories.filter(category => tripInterests.includes(category)).length);
    }
    console.log('this is $scope.filteredActivites ->', $scope.filteredActivites);
    //$scope.filteredActivites is an array of the activities filtered by selected activity
  };


  // Make a request to the database to get the activities based on interests
  $http({
    method: 'GET',
    url: '/api/activities'
  })
  // The activities information is in the data section in console
    .then(res => {
      console.log('Activities are', res.data);
      // return all the data
      $scope.activities = res.data;
      $scope.filteredActivites = res.data;
      // $scope.activities.categories = res.data.categories;
      //TODO: In views change everything so that it refers to filteredActivites
    });

    // make a request to the database to get all accommodations
  $http({
    method: 'GET',
    url: '/api/accommodations'
  })
    .then(res => {
      console.log('accommodations are', res.data);
      // return all the data
      $scope.accommodations = res.data;
      $scope.filteredAccommodations = res.data;
    });
}

export default TripsNewCtrl;
