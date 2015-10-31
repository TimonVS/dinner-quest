'use strict';

import 'angular-resource';
import dinnerFactory from './dinners.factory';

let dinnerModule = angular.module('dinners', [
  'ngResource'
])

.factory('Dinners', dinnerFactory);

export default dinnerModule;
