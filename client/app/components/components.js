import angular from 'angular';
import Discover from './discover/discover'
import Profile from './profile/profile'
import Badges from './badges/badges'

let componentModule = angular.module('app.components', [
  Discover.name,
  Profile.name,
  Badges.name
]);

export default componentModule;
