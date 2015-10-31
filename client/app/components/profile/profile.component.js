import template from './profile.html';
import controller from './profile.controller';
import './profile.scss';

let profileComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default profileComponent;
