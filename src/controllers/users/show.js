function UsersShowCtrl($http, $state, $scope) {
  console.log('This is the users show controller...');
  // make a request to db to get the user id
  $http({
    method: 'GET',
    url: `/api/user/${$state.params.id}`
  })
  // retrieve the id in the response
    .then(res => {
      console.log('Found user with id ', res.data);
      // put user id on scope
      $scope.user = res.data;
    });
}

export default UsersShowCtrl;
