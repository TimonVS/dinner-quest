import uiRouter from 'angular-ui-router';
import sliderComponent from './euro-slider.component';

let slidersModule = angular.module('review', [
  uiRouter
])

  .directive('dqSlider', sliderComponent);

export default slidersModule;
