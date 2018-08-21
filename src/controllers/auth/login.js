
function AuthLoginCtrl($scope, $http, $auth, $state) {
  $scope.login = function() {
    console.log('Log in controller');
    $auth.login($scope.user)
      .then(() => {
        console.log('Logging in user...', $scope.user);
        $state.go('tripsNew1');
      })
      .catch(err => console.log('There was an error', err));
  };
}

export default AuthLoginCtrl;
