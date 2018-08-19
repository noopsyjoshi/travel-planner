
function AuthLoginCtrl($scope, $http, $auth, $state) {
  $scope.login = function() {
    console.log('log in controller...');
    $http({
      method: 'POST',
      url: 'api/login',
      data: $scope.user
    });
    $auth.login($scope.user)
      .then(() => {
        console.log('logging in user...', $scope.user);
        $state.go('tripsNew');
      })
      .catch(err => console.log('There was an error', err));
  };
}

export default AuthLoginCtrl;
