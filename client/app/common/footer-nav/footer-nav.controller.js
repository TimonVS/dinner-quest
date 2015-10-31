class FooterNavController {
  constructor($scope, $ionicModal) {
    this.openCreateModal = function () {
      $scope.modal = $ionicModal.fromTemplate('<create></create>', {
        scope: $scope
      });
      $scope.modal.show();
    }
  }
}

export default FooterNavController;
