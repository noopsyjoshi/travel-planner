function Router($stateProvider, $urlRouterProvider) {

  // // Secure route
  // function secureState($q, $auth, $state, $rootScope) {
  //   // Create a new Promise. $q is angular's way of saying Promise
  //   return new $q((resolve) => {
  //     if($auth.isAuthenticated()) return resolve();
  //     // User not logged in
  //     // Create a flash message!
  //     console.log('Creating a flash message from the router');
  //     $rootScope.$broadcast('flashMessage', {
  //       type: 'warning',
  //       content: 'Please log in to do this.'
  //     });
  //     $state.go('login');
  //   });
  // }

  // Creating our ui router states
  $stateProvider
  // TODO: Home page is also the page where the user can create a new trip? Check routes for this
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    // Login page
    .state('login', {
      templateUrl: './views/auth/login.html',
      url: '/login',
      controller: 'AuthLoginCtrl'
    })
    // Register page
    .state('register', {
      templateUrl: './views/auth/register.html',
      url: '/register',
      controller: 'AuthRegisterCtrl'
    })
    .state('usersIndex', {
      templateUrl: './views/users/index.html',
      url: '/users',
      controller: 'UsersIndexCtrl'
      // resolve: {
      //   secureState,
      //   users: function($http) {
      //     return $http({
      //       method: 'GET',
      //       url: '/api/users'
      //     })
      //       .then(res => res.data);
      //   }
      // }
    })
    // Show user dashboard
    .state('usersShow', {
      templateUrl: './views/users/show.html',
      url: '/users/:id',
      controller: 'UsersShowCtrl'
    })
    .state('usersEdit', {
      templateUrl: './views/users/edit.html',
      url: '/users/:id/edit',
      controller: 'UsersEditCtrl'
    })
    // New trip form
    // .state('tripsNew', {
    //   templateUrl: './views/trips/new.html',
    //   url: '/trips/new',
    //   controller: 'TripsNewCtrl'
    // })

    // TODO: Discuss best way to rename states
    // Trips New 1 is the page the user is directed to directly after log in
    // The map will be displayed here
    // Put map separately in directives form
    .state('tripsNew1', {
      templateUrl: './views/trips/newtrip1.html',
      url: '/trips/new',
      controller: 'TripsNewCtrl'
    })
    // Trips New 2 - the user can enter their budget, accomodation type and pick their accomodation
    .state('tripsNew2', {
      templateUrl: './views/trips/newtrip2.html',
      url: '/trips/new',
      controller: 'TripsNewCtrl'
    })
    // Trips New 3 - the user can select their interests
    .state('tripsNew3', {
      templateUrl: './views/trips/newtrip3.html',
      url: '/trips/new',
      controller: 'TripsNewCtrl'
    })
    // Trips New 4 - where the user can select their activities based on their interests
    .state('tripsNew4', {
      templateUrl: './views/trips/newtrip4.html',
      url: '/trips/new',
      controller: 'TripsNewCtrl'
    })
    .state('summary', {
      templateUrl: './views/trips/summary.html',
      url: '/trips/new',
      controller: 'TripsNewCtrl'
    })
    .state('tripsShow', {
      templateUrl: './views/trips/show.html',
      url: '/trips/:id',
      controller: 'TripsShowCtrl'
    });
  // App will redirect you to the home page if only localhost:8000 is noted (without the #!)
  $urlRouterProvider.otherwise('/');
}

export default Router;
