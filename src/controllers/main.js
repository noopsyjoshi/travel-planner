function MainCtrl($auth, $scope, $state, $rootScope, $timeout) {
  // We're making sure isAuthenticated is available everywhere
  // NOTE: isAuthenticated is a function!
  $rootScope.trip = {
    accommodationTypes: [],
    accommodations: [],
    interests: [],
    activities: []
  };

  $scope.isAuthenticated = $auth.isAuthenticated;
  $rootScope.$on('flashMessage', (e, data) => {
    console.log('e is ', e, 'data is', data);
    $scope.flashMessage = data;

    $timeout(() => $scope.flashMessage = null, 4000);
  });

  $scope.logout = function() {
    $auth.logout();
    console.log('user has logged out');
    $state.go('home');
  };
}

export default MainCtrl;
