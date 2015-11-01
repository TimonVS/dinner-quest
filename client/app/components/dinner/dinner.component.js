'use strict';

import template from './dinner.html';
import controller from './dinner.controller';
import './dinner.scss';

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
