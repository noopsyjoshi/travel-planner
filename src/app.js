// Front-end

import angular from 'angular';
import '@uirouter/angularjs';

import 'bulma';
import './scss/style.scss';

// Router
import Router from './config/routes';

// Custom directives
// import Map from './directives/map';

import MainCtrl from './controllers/main';

import TripsNewCtrl from './controllers/trips/new';
import TripsShowCtrl from './controllers/trips/show';
import TripsEditCtrl from './controllers/trips/edit';

// Sessions
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';

angular.module('Traverse', ['ui.router']) // ui.router is a dependency
  // .directive('ngMap', Map)
  .controller('MainCtrl', MainCtrl)
  .controller('TripsNewCtrl', TripsNewCtrl)
  .controller('TripsShowCtrl', TripsShowCtrl)
  .controller('TripsEditCtrl', TripsEditCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .config(Router)
  .config(function($authProvider) {
    $authProvider.loginUrl = '/api/login';
    $authProvider.signupUrl = '/api/register';
  });
