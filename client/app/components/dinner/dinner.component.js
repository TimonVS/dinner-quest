import template from './dinner.html';
import controller from './dinner.controller';
import './dinner.styl';

let dinnerComponent = function () {
  return {
    restrict: 'E',
    scope: {
      dinner: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default dinnerComponent;
