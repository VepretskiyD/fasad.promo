angular.module('app').controller('MainMenuController', function ($scope, $rootScope, $location) {
  $scope.toggleMenu = function () {
    $scope.showMenu = !$scope.showMenu;
    if (!$scope.showMenu) {
      $scope.closeDropdowns = true;
    }
  }
  $scope.closeDropdowns = false;
  $scope.closeThis = function () {
    $scope.showMenu = false;
    $scope.closeDropdowns = true;
  };
  $scope.isActive = function (page) {
    var currentLocation = $location.path();
    if (currentLocation == page) {
      return true;
    } else {
      return false;
    };
  };
  $rootScope.$watch('currentPath', function (val) {
    $scope.showMenu = false;
    $scope.closeDropdowns = true;
  })
});
angular.module('app').controller('HomeController', function ($scope) {

});
angular.module('app').controller('AboutController', function ($scope) {

});

angular.module('app').controller('ErrorPageController', function ($scope) {

});
