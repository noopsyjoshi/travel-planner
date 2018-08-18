function AuthLogoutCtrl($scope, $http, $auth, $state) {
  $scope.logout = function() {
    console.log('log out controller...');
    localStorage.clearAll();
    console.log('user has logged out');
    $state.go('login');
  };
}

export default AuthLogoutCtrl;
