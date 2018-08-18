function AuthRegisterCtrl($scope, $auth, $state) {
  $scope.register = function() {
    console.log('register controller...');
    $auth
      .signup($scope.user)
      .then(() => {
        console.log('new user created...', $scope.user);
        $state.go('login');
      });
  };
}

export default AuthRegisterCtrl;
