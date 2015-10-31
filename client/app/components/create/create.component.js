import template from './create.html';
import controller from './create.controller';
import './create.styl';

let createComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default createComponent;
