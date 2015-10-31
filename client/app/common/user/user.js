'use strict';

import angular from 'angular';
import UserFactory from './user.factory';
import 'angular-cookies';

let userModule = angular.module('user', [
  'auth',
  'ngCookies'
])

.factory('User', UserFactory);

export default userModule;
