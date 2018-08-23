function UsersShowCtrl($http, $scope, $state) {

  console.log('This is the users show controller...');

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      $scope.user = res.data;
      console.log('res.data', res.data);
    });
}

export default UsersShowCtrl;
