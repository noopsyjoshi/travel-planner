
function AuthLoginCtrl($scope, $http, $auth, $state, $rootScope) {

  $scope.user = {
    email: 'noopurjoshi@gmail.com',
    password: 'pass'
  };

  $scope.login = function() {
    console.log('Log in controller');
    $auth.login($scope.user)
      .then(() => {
        console.log('There is now a userId stored on the token!', $auth.getPayload().sub);
        // Make the logged in user's ID available everywhere!
        $rootScope.userId = $auth.getPayload().sub;
        $state.go('tripsNew1');
        $http({
          method: 'GET',
          url: `/api/users/${$rootScope.userId}`
        })
        // retrieve the id in the response
          .then(res => {
            console.log('Found user with id ', res.data);
            // put user id on root scope (available everywhere!)
            $rootScope.user = res.data;
          });
      })
      .catch(err => console.log('There was an error', err));
  };
}

export default AuthLoginCtrl;
