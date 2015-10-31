'use strict';

import loginComponent from './login.component';
import uiRouter from 'angular-ui-router';
import User from '../user/user';

import './login.scss';

let loginModule = angular.module('login', [
  uiRouter,
  User.name
])

.config(($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    });
})

.directive('login', loginComponent);

export default loginModule;
