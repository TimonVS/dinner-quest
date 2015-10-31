import template from './discover.html';
import controller from './discover.controller';
import './discover.scss';

let discoverComponent = function () {
  return {
    restrict: 'E',
    scope: {
      recepies: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default discoverComponent;
