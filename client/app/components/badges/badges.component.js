import template from './badges.html';
import controller from './badges.controller';
import './badges.styl';

let badgesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default badgesComponent;
