import angular from 'angular';
import Discover from './discover/discover'

let componentModule = angular.module('app.components', [
  Discover.name
]);

export default componentModule;
