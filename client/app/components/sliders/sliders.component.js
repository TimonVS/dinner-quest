import './sliders.scss';

export default function () {
  return {
    restrict: 'E',
    scope: {
      value: '=',
      max: '=',
      type: '='
    },
    template: `<div class="dq-slider row">
    <div class="col" ng-repeat="item in items">
    <span ng-class="{active: isActive($index)}" ng-click="activate($index)" class="{{ type }}"></span>
    </div>
    </div>`,
    link: function (scope) {
      scope.items = [];

      for (let i = 0; i < scope.max; i++) {
        scope.items.push(i);
      }

      scope.activate = function (index) {
        scope.value = index;
      }

      scope.isActive = function (index) {
        return index <= scope.value
      }
    }
  }
}
