'use strict';

import Dinner from './dinner/dinner';
import Discover from './discover/discover';
import DiscoverItem from './discoverItem/discoverItem';
import Create from './create/create';
import Profile from './profile/profile';
import Notifications from './notifications/notifications';
import Review from './review/review';
import Badges from './badges/badges';
import userHeader from './userHeader/userHeader';
import Sliders from './sliders/sliders';
import SearchBar from './searchBar/searchBar'

let componentModule = angular.module('app.components', [
  Dinner.name,
  Discover.name,
  DiscoverItem.name,
  Create.name,
  Profile.name,
  Notifications.name,
  Review.name,
  Badges.name,
  userHeader.name,
  Sliders.name,
  SearchBar.name
]);

export default componentModule;
