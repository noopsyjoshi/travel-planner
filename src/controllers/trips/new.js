function TripsNewCtrl($scope, $http) {
  console.log('into the new trip controller...');

  // Trip Duration Variables
  const buttonThree = document.querySelector('#btnThree');
  const buttonSeven = document.querySelector('#btnSeven');
  const buttonTen = document.querySelector('#btnTen');

  // This is the span that will display the user's choice
  const selectedDuration = document.querySelector('#tripDuration');

  // Accomodation type Variables
  const buttonHotel = document.querySelector('#btnHotel');
  const buttonHostel = document.querySelector('#btnHostel');
  const buttonBedBreakfast = document.querySelector('#btnBedBreakast');

  // This will display the type of accomodation user has selected
  const selectedAccomodationType = document.querySelector('#accomodationType');

  // Interests Variables
  const buttonMusic = document.querySelector('#btnMusic');
  const buttonHistory = document.querySelector('#btnHistory');
  const buttonRestaurants = document.querySelector('#btnRestaurants');

  // This will display the interests in the html
  const selectedInterests = document.querySelector('#interests');

  // Get Trip Duration
  $scope.getDurationThreeDays = function() {
    console.log('user has selected', buttonThree.innerHTML );
    selectedDuration.innerHTML = buttonThree.innerHTML;
    $scope.selectedDuration = 3;
    // $scope.selectedDuration should return 3
    console.log('$scope with the duration is ', $scope.selectedDuration);
  };

  $scope.getDurationSevenDays = function() {
    console.log('user has selected', buttonSeven.innerHTML );
    selectedDuration.innerHTML = buttonSeven.innerHTML;
    $scope.selectedDuration = 7;
    // $scope.selectedDuration should return 7
    console.log('$scope with the duration is ', $scope.selectedDuration);
  };

  $scope.getDurationTenDays = function() {
    console.log('user has selected', buttonTen.innerHTML );
    selectedDuration.innerHTML = buttonTen.innerHTML;
    $scope.selectedDuration = 10;
    // $scope.selectedDuration should return 10
    console.log('$scope with the duration is ', $scope.selectedDuration);
  };

  // Get Accomodation Type
  $scope.getTypeHotel = function() {
    console.log('user has selected', buttonHotel.innerHTML );
    selectedAccomodationType.innerHTML = buttonHotel.innerHTML;
    $scope.selectedAccomodationType = 'Hotel';
    console.log('$scope with the selected accomodation type is ', $scope.selectedAccomodationType);
  };

  $scope.getTypeHostel = function() {
    console.log('user has selected', buttonHostel.innerHTML );
    selectedAccomodationType.innerHTML = buttonHostel.innerHTML;
    $scope.selectedAccomodationType = 'Hostel';
    console.log('$scope with the selected accomodation type is ', $scope.selectedAccomodationType);
  };

  $scope.getTypeBedBreakfast = function() {
    console.log('user has selected', buttonBedBreakfast.innerHTML );
    selectedAccomodationType.innerHTML = buttonBedBreakfast.innerHTML;
    $scope.selectedAccomodationType = 'Bed & Breakfast';
    console.log('$scope with the selected accomodation type is ', $scope.selectedAccomodationType);
  };

  // Get
  $scope.getInterestMusic = function() {
    console.log('user has selected', buttonMusic.innerHTML);
    // selectedInterests.innerHTML = buttonMusic.innerHTML;
    const music = document.createElement('li');
    music.classList.add('box');
    music.innerHTML = buttonMusic.innerHTML;
    selectedInterests.appendChild(music);
    $scope.music = 'music';
  };

  $scope.getInterestHistory = function() {
    console.log('user has selected', buttonHistory.innerHTML);
    // selectedInterests.innerHTML = buttonHistory.innerHTML;
    const history = document.createElement('li');
    history.classList.add('box');
    history.innerHTML = buttonHistory.innerHTML;
    selectedInterests.appendChild(history);
  };

  $scope.getInterestRestaurants = function() {
    console.log('user has selected', buttonRestaurants.innerHTML);
    // selectedInterests.innerHTML = buttonRestaurants.innerHTML;
    const restaurants = document.createElement('li');
    restaurants.classList.add('box');
    restaurants.innerHTML = buttonRestaurants.innerHTML;
    selectedInterests.appendChild(restaurants);
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
