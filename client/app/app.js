'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';
import 'ionic-sdk/release/js/ionic.bundle.js';
import 'app.scss';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  'ionic'
])

.directive('app', AppComponent);
