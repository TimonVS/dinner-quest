'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import discoverItemComponent from './discoverItem.component';
import 'angular-moment';

let discoverItemModule = angular.module('discoverItem', [
  uiRouter,
  'angularMoment'
])

.directive('discoverItem', discoverItemComponent);

export default discoverItemModule;
