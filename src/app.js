// Front-end

import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-messages';

// Authentication
import 'satellizer';

// Styling
import 'bulma';
import './scss/style.scss';

// Router
import Router from './config/routes';

// Custom directives
// import Map from './directives/map';

// Import Main controller
import MainCtrl from './controllers/main';

// Import Trips controller
import TripsNewCtrl from './controllers/trips/new';
import TripsShowCtrl from './controllers/trips/show';
import TripsEditCtrl from './controllers/trips/edit';

// Import Users controller
import UsersShowCtrl from './controllers/users/show';
// import UsersEditCtrl from './controllers/users/edit';

// Import Activities controller

// Sessions
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';

angular.module('Traverse', ['ui.router', 'ngMessages', 'satellizer']) // ui.router is a dependency
  // .directive('ngMap', Map)
  .controller('MainCtrl', MainCtrl)
  .controller('TripsNewCtrl', TripsNewCtrl)
  .controller('TripsShowCtrl', TripsShowCtrl)
  .controller('TripsEditCtrl', TripsEditCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  // .controller('UsersEditCtrl', UsersEditCtrl)
  .config(Router)
  .config(function($authProvider) {
    $authProvider.loginUrl = '/api/login';
    $authProvider.signupUrl = '/api/register';
  });
