import angular from 'angular';
import uiRouter from 'angular-ui-router';
import discoverItemComponent from './discoverItem.component';

let discoverItemModule = angular.module('discoverItem', [
  uiRouter
])

.directive('discoverItem', discoverItemComponent);

export default discoverItemModule;
