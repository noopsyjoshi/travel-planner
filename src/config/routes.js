function Router($stateProvider, $urlRouterProvider) {

  // Secure route
  function secureState($q, $auth, $state, $rootScope) {
    // Create a new Promise. $q is angular's way of saying Promise
    return new $q((resolve) => {
      if($auth.isAuthenticated()) return resolve();
      // User not logged in
      // Create a flash message!
      console.log('Creating a flash message from the router');
      $rootScope.$broadcast('flashMessage', {
        type: 'warning',
        content: 'Please log in to do this.'
      });
      $state.go('login');
    });
  }

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
      controller: 'UsersIndexCtrl',
      resolve: {
        secureState,
        users: function($http) {
          return $http({
            method: 'GET',
            url: '/api/users'
          })
            .then(res => res.data);
        }
      }
    })
    // Show user dashboard
    .state('usersShow', {
      templateUrl: './views/users/show.html',
      url: '/users/:id',
      controller: 'UsersShowCtrl'
    })
    // New trip form - select location
    .state('tripsNew', {
      templateUrl: './views/trips/new.html',
      url: '/trips/:id',
      controller: 'TripsNewCtrl'
    });
  // App will redirect you to the home page if only localhost:8000 is noted (without the #!)
  $urlRouterProvider.otherwise('/');
}

export default Router;
