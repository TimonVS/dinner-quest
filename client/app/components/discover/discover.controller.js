'use strict';

class DiscoverController {
  constructor (Dinners, $scope) {

    var vm = this;

    vm.name = 'discover';

    vm.sort = 'distance';

    $scope.$watch(
        "vm.sort",
        function changeSort( newValue, oldValue ) {
          let dinners = Dinners.query({ sort: newValue })
          vm.dinners = dinners
        }
    );
  }
}

export default DiscoverController;
