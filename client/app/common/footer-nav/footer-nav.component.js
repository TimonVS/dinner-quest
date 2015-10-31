import template from './footer-nav.html';
import controller from './footer-nav.controller';
import './footer-nav.scss';

let footerNavComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default footerNavComponent;
