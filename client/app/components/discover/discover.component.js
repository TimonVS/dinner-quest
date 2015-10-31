import template from './discover.html';
import controller from './discover.controller';

let discoverComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default discoverComponent;
