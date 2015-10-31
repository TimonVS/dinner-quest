import template from './notifications.html';
import controller from './notifications.controller';
import './notifications.styl';

let notificationsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default notificationsComponent;
