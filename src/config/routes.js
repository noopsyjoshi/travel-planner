function Router($stateProvider, $urlRouterProvider) {
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
    // Show user dashboard
    .state('usersShow', {
      templateUrl: './views/users/show.html',
      url: '/user/:id',
      controller: 'UsersShowCtrl'
    });
  // App will redirect you to the home page if only localhost:8000 is noted (without the #!)
  $urlRouterProvider.otherwise('/');
}

export default Router;
