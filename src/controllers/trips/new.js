function TripsNewCtrl($scope) {
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
}


export default TripsNewCtrl;
