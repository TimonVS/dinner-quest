import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './list.component';

let listModule = angular.module('list', [
  uiRouter
])

.directive('list', listComponent);

export default listModule;
