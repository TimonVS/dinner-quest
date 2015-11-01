import template from './parallax.html';
import controller from './parallax.controller';
import './parallax.scss';

let parallaxComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default parallaxComponent;
