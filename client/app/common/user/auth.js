'use strict';

import 'angularfire';
import 'angular-cookies';
import AuthFactory from './auth.factory';

let authModule = angular.module('auth', [
  'firebase',
  'ngCookies'
])

.factory('Auth', AuthFactory);

export default authModule;
