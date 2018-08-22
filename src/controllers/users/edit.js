function UsersEditCtrl($state, $http, $scope) {
  console.log('This is the users edit controller...');

  $scope.updateWhiskey = function() {
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.user
    })
      .then(() => $state.go('usersShow', { id: $state.params.id }));
  };

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => $scope.user = res.data);
}

export default UsersEditCtrl;
