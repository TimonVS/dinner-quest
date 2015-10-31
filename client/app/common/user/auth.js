'use strict';

import 'angularfire';
import AuthFactory from './auth.factory';

let authModule = angular.module('auth', [
  'firebase'
])

.factory('Auth', AuthFactory);

export default authModule;
