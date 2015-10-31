'use strict';

import angular from 'angular';
import UserFactory from './user.factory';
import UserResourceFactory from './user.resource.factory';
import 'angular-cookies';
import 'angular-resource';

let userModule = angular.module('user', [
  'auth',
  'ngCookies',
  'ngResource'
])

.factory('UserResource', UserResourceFactory)

.factory('User', UserFactory);

export default userModule;
