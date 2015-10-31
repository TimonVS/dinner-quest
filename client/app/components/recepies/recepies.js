'use strict';

import 'angular-resource';
import recepieFactory from './recepies.factory';

let recepieModule = angular.module('recepies', [
  'ngResource'
])

.factory('Recepies', recepieFactory);

export default recepieModule;
