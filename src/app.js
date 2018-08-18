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

// Import controllers
import MainCtrl from './controllers/main';
import TripsNewCtrl from './controllers/trips/new';
import TripsShowCtrl from './controllers/trips/show';
import TripsEditCtrl from './controllers/trips/edit';

// Sessions
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLogoutCtrl from './controllers/auth/logout';

angular.module('Traverse', ['ui.router', 'ngMessages', 'satellizer']) // ui.router is a dependency
  // .directive('ngMap', Map)
  .controller('MainCtrl', MainCtrl)
  .controller('TripsNewCtrl', TripsNewCtrl)
  .controller('TripsShowCtrl', TripsShowCtrl)
  .controller('TripsEditCtrl', TripsEditCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLogoutCtrl', AuthLogoutCtrl)
  .config(Router)
  .config(function($authProvider) {
    $authProvider.loginUrl = '/api/login';
    $authProvider.signupUrl = '/api/register';
  });
