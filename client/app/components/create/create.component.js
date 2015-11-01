'use strict';

import template from './create.html';
import controller from './create.controller';
import './create.scss';

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
