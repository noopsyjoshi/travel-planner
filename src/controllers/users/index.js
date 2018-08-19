// Submit an HTTP rquest request to /api/users (we have this in insomnia as well)
function UsersIndexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/users'
  })
  // The whiskeys information is in the data section in console
    .then(res => {
      console.log('Users are', res.data);
      $scope.users = res.data;
    });
}

export default UsersIndexCtrl;
