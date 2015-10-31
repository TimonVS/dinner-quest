'use strict';

import Discover from './discover/discover';
import Create from './create/create'
import Profile from './profile/profile'
import Notifications from './notifications/notifications'
import Review from './review/review'
import Badges from './badges/badges'
import userHeader from './userHeader/userHeader';
import Sliders from './sliders/sliders'

let componentModule = angular.module('app.components', [
  Discover.name,
  Create.name,
  Profile.name,
  Notifications.name,
  Review.name,
  Badges.name,
  userHeader.name,
  Sliders.name
]);

export default componentModule;
