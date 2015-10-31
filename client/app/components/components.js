'use strict';

import Discover from './discover/discover';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Discover.name
]);

export default componentModule;
