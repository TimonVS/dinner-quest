import template from './searchBar.html';
import controller from './searchBar.controller';
import './searchBar.scss';

let searchBarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default searchBarComponent;
