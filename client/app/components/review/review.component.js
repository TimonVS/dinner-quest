import template from './review.html';
import controller from './review.controller';
import './review.styl';

let reviewComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default reviewComponent;
