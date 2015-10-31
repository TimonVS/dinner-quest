'use strict';

import template from './login.html';
import controller from './login.controller';
import './login.scss';

let loginComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default loginComponent;
