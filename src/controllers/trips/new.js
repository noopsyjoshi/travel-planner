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

  const selectedInterests = document.querySelector('#interests');


  // Get Trip Duration
  $scope.getDurationThreeDays = function() {
    console.log('user has selected', buttonThree.innerHTML );
    selectedDuration.innerHTML = buttonThree.innerHTML;
  };

  $scope.getDurationSevenDays = function() {
    console.log('user has selected', buttonSeven.innerHTML );
    selectedDuration.innerHTML = buttonSeven.innerHTML;
  };

  $scope.getDurationTenDays = function() {
    console.log('user has selected', buttonTen.innerHTML );
    selectedDuration.innerHTML = buttonTen.innerHTML;
  };

  // Get Accomodation Type
  $scope.getTypeHotel = function() {
    console.log('user has selected', buttonHotel.innerHTML );
    selectedAccomodationType.innerHTML = buttonHotel.innerHTML;
  };

  $scope.getTypeHostel = function() {
    console.log('user has selected', buttonHostel.innerHTML );
    selectedAccomodationType.innerHTML = buttonHostel.innerHTML;
  };

  $scope.getTypeBedBreakfast = function() {
    console.log('user has selected', buttonBedBreakfast.innerHTML );
    selectedAccomodationType.innerHTML = buttonBedBreakfast.innerHTML;
  };

  // Get
  $scope.getInterestMusic = function() {
    console.log('user has selected', buttonMusic.innerHTML);
    // selectedInterests.innerHTML = buttonMusic.innerHTML;
    const music = document.createElement('li');
    music.classList.add('box');
    music.innerHTML = buttonMusic.innerHTML;
    selectedInterests.appendChild(music);
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
    });
}


export default TripsNewCtrl;
