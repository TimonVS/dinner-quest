'use strict';

class SearchBarController {
  constructor (Recepies, $rootScope) {
    var vm = this;

    vm.recipies = Recepies.query();

    vm.chooseRecipy = function (recipy) {
      vm.activated = false;
      $rootScope.$emit('RECEPIE_SELECTED', recipy);
      vm.search = recipy.recepttitel;
    };

    vm.activateSearch = function () {
      vm.activated = true;
    };
  }
}

export default SearchBarController;
