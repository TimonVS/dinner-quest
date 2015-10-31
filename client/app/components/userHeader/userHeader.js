import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userHeaderComponent from './userHeader.component';

let userHeaderModule = angular.module('userHeader', [
  uiRouter
])

.directive('userHeader', userHeaderComponent);

export default userHeaderModule;
