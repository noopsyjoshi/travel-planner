

// THIS IS THE CONTROLLER RESPONSIBLE FOR CREATING A NEW TRIP

function TripsNewCtrl($scope, $http, $rootScope, $state) {
  console.log('into the new trip controller...');

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// VARIABLES /////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.durations = [3, 7, 10];
  $scope.interests = ['Music', 'Hisorical Landmarks', 'Museums'];
  $scope.accommodationTypes = ['Hotel', 'Hostel', 'Bed and Breakfast'];
  $scope.maps = {};

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// LOCATION  /////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.getLocation = function() {
    console.log('into the getlocation function');
    $rootScope.trip.city = $scope.trip.city;
    console.log('trip object is',  $rootScope.trip.city);
  };

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// DURATION //////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  // TODO: Add toggle class
  $scope.toggleDuration = function($event) {
    // get the value of the button that is clicked
    const selectedDuration = $event.target.getAttribute('durationVal');
    $event.target.classList.add('has-background-link');
    $event.target.classList.add('is-white');
    // $rootScope.trip should reflect your model
    // $rootScope.trip is defined as an empty object in the MainCtrl so that it doesn't get set to be empty every time the new controller runs
    $rootScope.trip.duration = selectedDuration;
    console.log('rootScope.trip', $rootScope.trip);
    getNumber(selectedDuration);
  };

  function getNumber(selectedDuration) {
    console.log('selectedDuration is', selectedDuration);
    const days = [];
    for(var i=0; i<selectedDuration; i++) {
      console.log(i);
      days.push(i);
    }
    $rootScope.days = days;
    console.log(days);
  }

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
  };

  $scope.selectedAccommodation = [];

  // Select Accommodation from list
  $scope.addAccommodation = function(index) {
    // selectedAccommodation is what the user has selected (one row in the display relates to one accommodation)
    const selectedAccommodation = $scope.filteredAccommodations[index];
    console.log('selectedAccommodation is', selectedAccommodation);
    // Update the UI
    $scope.selectedAccommodation = [selectedAccommodation.name];
    // Update the trip object
    $rootScope.trip.accommodations = [selectedAccommodation];
  };

  // Remove Accommodation from list
  $scope.removeAccommodation = function(index) {
    // selectedAccommodation is what the user has selected (one row in the display relates to one accommodation)
    const selectedAccommodation = $scope.filteredAccommodations[index];
    console.log('selectedAccommodation is', selectedAccommodation);
    // Update the UI
    $scope.selectedAccommodation = [];
    // Update the trip object
    $rootScope.trip.accommodations = [];
  };

  $scope.selectedActivities = [];

  // Display the selected activity from a list
  $scope.addActivity = function(index) {
    // selectedActivity is what the user has selected (one row in the display relates to one activity)
    const selectedActivity = $scope.filteredActivites[index];
    // Update the UI
    $scope.selectedActivities.push(selectedActivity.name);
    // Update the trip object
    $rootScope.trip.activities.push(selectedActivity);
  };

  $scope.removeActivity = function(index) {
    // selectedActivity is what the user has selected (one row in the display relates to one activity)
    const selectedActivity = $scope.filteredActivites[index];
    // Update the UI
    $scope.selectedActivities = $scope.selectedActivities.filter(activity => activity !== selectedActivity.name);
    // Update the trip object
    $rootScope.trip.activities = $rootScope.trip.activities.filter(activity => activity.name !== selectedActivity.name);
  };

  // Divide activities into columns (per each day)
  $scope.sortActivitiesPerDay = function() {
    $rootScope.selectedActivites = $scope.selectedActivities;
    console.log('$scope.selectedActivites.length', $scope.selectedActivites.length);
  };

  //////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// BUDGET ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.getBudget = function() {
    $rootScope.trip.budget = $scope.trip.budget;
  };

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////// INTEREST AND ACTIVITIES //////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.toggleInterest = function($event) {
    // Set filteredActivities to all the activities
    $scope.filteredActivites = $scope.activities;

    let tripInterests = $rootScope.trip.categories;
    //tripInterests is the collection of the selected interests we have clicked on
    // console.log('this is $scope.filteredActivites ->', $scope.filteredActivites);

    const selectedInterest = $event.target.getAttribute('interestVal');
    //selectedInterest is the one we clicked on

    if(tripInterests.includes(selectedInterest)) {
      // remove interest
      tripInterests = tripInterests.filter(interest => interest !== selectedInterest);
    } else {
      // add interest
      tripInterests.push(selectedInterest);
    }

    $rootScope.trip.categories = tripInterests;

    if(tripInterests.length !== 0) {
      // 1. Check all of the Activities
      // 2. Check each activity has a category that matches the user's selected interest
      $scope.filteredActivites = $scope.filteredActivites.filter(activity =>  activity.categories.filter(category => tripInterests.includes(category)).length);
      $rootScope.filteredActivites = $scope.filteredActivites;
    }
    console.log($rootScope.trip);
  };

  $http({ // Make a request to the database to get the activities based on interests
    method: 'GET',
    url: '/api/activities'
  })
  // The activities information is in the data section in console
    .then(res => {
      $scope.activities = res.data; // res.data returns all the data in activities
      $scope.filteredActivites = res.data;
      // $scope.activities.categories = res.data.categories;
      //TODO: In views change everything so that it refers to filteredActivites
    });

  $http({ // make a request to the database to get all accommodations
    method: 'GET',
    url: '/api/accommodations'
  })
    .then(res => {
      // return all the data
      $scope.accommodations = res.data;
      $scope.filteredAccommodations = res.data;
    });

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////// SUBMIT TRIP //////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  $scope.handleSubmit = function() {
    $http({
      method: 'POST',
      url: '/api/trips',
      data: $rootScope.trip
    })
      .then(res => {
        $state.go('tripsShow', { id: res.data._id });
      });
  };

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////// MAPS /////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////


  // MAP FUNCTIONS
  //   $rootScope.$on('$stateChangeStart',
  //   function(event, toState, toParams, fromState, fromParams){
  //     // do something
  // })

  // $scope.$watch('maps.city', function() { // watching for maps and accommodation data to load first before adding a map
  //   if($scope.maps.city) {
  //     drawCityMap();
  //   }
  // });
  //
  // function drawCityMap() {
  //   const map = $scope.maps.city;
  //   map.setView([25, 0], 2);
  //   // const marker = L.marker([city]).addTo($scope.map);
  //   // marker.bindPopup(`<p>${trip.city}</p>`);
  // }
  //
  // $scope.$watchGroup(['maps.accommodation', 'accommodations'], function() { // watching for maps and accommodation data to load first before adding a map
  //   if($scope.maps.accommodations && $scope.accommodations) {
  //     drawAccommodationMap();
  //   }
  // });

    // $scope.$watchGroup(['map', 'accommodations'], function() {
    //   if($scope.map && $scope.accommodations) {
  //     drawAccommodationMap();
    //   }
    // });

    // function drawAccommodationMap() {
    //   // Add one marker for each accommodation
    //   const accommodations = $scope.accommodations;
    //   accommodations.forEach(accommodation => {
    //     const lat = accommodation.coordinates.latitude; // getting data from seeds and storing in a new variable
    //     const lng = accommodation.coordinates.longitude;
    //     $scope.map.setView([lat, lng], 12); //
    //     const marker = L.marker([lat, lng]).addTo($scope.map);
    //     marker.bindPopup(`<p>${accommodation.name}</p>`);
    //   });
    // }

  // function drawAccommodationMap() {
  //   const map = $scope.maps.accommodations;
  //   const accommodations = $scope.accommodations;
  //   accommodations.forEach(accommodation => {
  //     const lat = accommodation.coordinates.latitude; // getting data from seeds and storing in a new variable
  //     const lng = accommodation.coordinates.longitude;
  //     map.setView([lat, lng], 12);
  //     const marker = L.marker([lat, lng]).addTo(map);
  //     marker.bindPopup(`<p>${accommodation.name}</p>`);
  //   });
  // }
  //
  // $scope.$watchGroup(['maps.activities', 'activities'], function() { // watching for maps and accommodation data to load first before adding a map
  //   if($scope.maps.activities && $scope.activities) {
  //     drawActivitiesMap();
  //   }
  // });
  //
  // function drawActivitiesMap() {
  //   console.log('clicked activities map');
  //   const map = $scope.maps.activities;
  //   $scope.activities = [];
  //   const activities = $scope.activities;
  //   activities.forEach(activity => {
  //     const lat = activity.coordinates.latitude;
  //     const lng = activity.coordinates.longitude;
  //     map.setView([lat, lng], 12);
  //     const marker = L.marker([lat, lng]).addTo(map);
  //     marker.bindPopup(`<p>${activity.name}</p>`);
  //   });
  // }
}

export default TripsNewCtrl;
