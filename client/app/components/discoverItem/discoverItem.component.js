import template from './discoverItem.html';
import controller from './discoverItem.controller';
import './discoverItem.scss';

let discoverItemComponent = function () {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default discoverItemComponent;
