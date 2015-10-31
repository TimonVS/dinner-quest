import template from './userHeader.html';
import controller from './userHeader.controller';
import './userHeader.styl';

let userHeaderComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default userHeaderComponent;
