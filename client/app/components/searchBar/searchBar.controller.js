class SearchBarController {
  constructor(Recepies) {
    var vm = this;

    vm.recipies = Recepies.query();

    vm.chooseRecipy = function (recipy) {
      vm.activated = false;
      vm.search = recipy.recepttitel;
    }

    vm.activateSearch = function () {
      vm.activated = true
    }
  }
}

export default SearchBarController;
