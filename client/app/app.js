'use strict';

import 'ionic-sdk/release/js/ionic.bundle.js';
import 'angularjs-slider';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';
import 'app.scss';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  'ionic',
  'rzModule'
])

.directive('app', AppComponent);

