// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("landingCtrl", function($scope, landingService) {
  // VARIABLES
  // ============================================================
  $scope.test = "";
  // FUNCTIONS
  // ============================================================

  $scope.getTest = function () {
    landingService.test().then(function(response) {
      $scope.test = response;
    });
  }
  $scope.getTest()

});
