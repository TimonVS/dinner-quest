import uiRouter from 'angular-ui-router';
import createComponent from './create.component';

let createModule = angular.module('create', [
  uiRouter
])

.directive('create', createComponent);

export default createModule;
