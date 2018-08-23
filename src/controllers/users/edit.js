function UsersEditCtrl($state, $http, $scope) {
  console.log('This is the users edit controller...');

  $scope.updateUser = function() {
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.user
    })
      .then(() => {
        console.log('updating user info...');
        $state.go('usersShow', { id: $state.params.id });
      });
  };

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      console.log('getting user data...');
      $scope.user = res.data;
    });
}

export default UsersEditCtrl;
