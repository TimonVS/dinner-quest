import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerNavComponent from './footer-nav.component';

let footerNavModule = angular.module('footerNav', [
  uiRouter
])

.directive('footerNav', footerNavComponent);

export default footerNavModule;
