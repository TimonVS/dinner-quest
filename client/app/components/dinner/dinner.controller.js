class DinnerController {
  constructor($scope, $ionicHistory) {
    this.name = 'dinner';

    this.back = function () {
        $ionicHistory.goBack();
    }
  }
}

export default DinnerController;
