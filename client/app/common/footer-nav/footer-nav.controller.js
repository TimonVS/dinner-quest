class FooterNavController {
  constructor($rootScope, $scope, $ionicModal) {
    this.openCreateModal = function () {
      $scope.modal = $ionicModal.fromTemplate('<create></create>', {
        scope: $scope
      });
      $scope.modal.show();

      $rootScope.$on('close_modal', function () {
        $scope.modal.hide();
      })
    }
  }
}

export default FooterNavController;
