import template from './hero.html';
import controller from './hero.controller';
import './hero.scss';

let heroComponent = function () {
  return {
    restrict: 'E',
    scope: {
      profile: '=',
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default heroComponent;
