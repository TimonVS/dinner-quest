'use strict';

class SearchBarController {
  constructor ($scope, Recepies, $rootScope, $ionicPopup) {
    var vm = this;
    var popup

    vm.recipies = Recepies.query();

    vm.chooseRecipy = function (recipy) {
      recipy = !!recipy ? recipy : $scope.activeRecipy;
      popup.close();
      vm.activated = false;
      $rootScope.$emit('RECEPIE_SELECTED', recipy);
      vm.search = recipy.recepttitel;
    };

    vm.activateSearch = function () {
      vm.activated = true;
    };

    function parseRecipyIngredients (recipy) {
      return recipy.receptingredienten.split('-');
    }

    vm.showPopup = function (recipy) {
      $scope.activeRecipy = recipy;
      $scope.recipyIngredients = parseRecipyIngredients(recipy);
      popup = $ionicPopup.show({
        template: `
        <div style="text-align: center; margin-bottom: 10px;">
          <span>{{ activeRecipy.receptbereidingstijd }} minutes</span>
          <span class="center-dot">&bull;</span>
          <span ng-bind="activeRecipy.receptenergie"></span>
        </div>
        <ul>
        <span class="bold-title-thing">Ingredients</span>
        <li ng-repeat="ingredient in recipyIngredients" ng-bind="ingredient"></li>
        </ul>
        <button class="choose-button" ng-click="vm.chooseRecipy()">Choose recipy</button>`,
        title: $scope.activeRecipy.recepttitel,
        scope: $scope
      });
    };
  }
}

export default SearchBarController;
