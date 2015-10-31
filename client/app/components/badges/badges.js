import angular from 'angular';
import uiRouter from 'angular-ui-router';
import badgesComponent from './badges.component';

let badgesModule = angular.module('badges', [
  uiRouter
])

.directive('badges', badgesComponent);

export default badgesModule;
