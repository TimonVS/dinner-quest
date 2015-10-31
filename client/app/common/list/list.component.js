'use strict';

import template from './list.html';
import controller from './list.controller';
import './list.styl';

let listComponent = function () {
  return {
    restrict: 'E',
    scope: {
      items: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default listComponent;
