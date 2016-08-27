angular.module('app').controller('MainMenuController', function ($scope, $rootScope, $location) {
  $scope.toggleMenu = function () {
    $scope.showMenu = !$scope.showMenu;
    if (!$scope.showMenu) {
      $scope.closeThis();
      // $scope.closeDropdowns = true;
    }
  }
  // $scope.closeDropdowns = false;
  // $scope.isOpenedDropdown = false;
  $scope.closeThis = function () {
    if ($scope.isOpenedDropdown || $scope.showMenu) {

      $scope.showMenu = false;
      $scope.closeDropdowns = true;
      // console.log('close this', $scope.closeDropdowns);
    }
  };
  $scope.isActive = function (page) {
    var currentLocation = $location.path();
    var currentRoute = $rootScope.currentOriginalPath;
    if (currentLocation == page || currentRoute == page) {
      return true;
    } else {
      return false;
    };
  };
  $rootScope.$watch('currentPath', function (val) {
    // console.log('path is changed');
    // $scope.showMenu = false;
    $scope.closeThis();
    // $scope.closeDropdowns = true;
  })
});
angular.module('app').controller('HomeController', function ($scope) {

});
angular.module('app').controller('AboutController', function ($scope) {

});
angular.module('app').controller('WhyUsController', function ($scope) {

});
angular.module('app').controller('TechnologyController', function ($scope) {

});
angular.module('app').controller('GalleryController', function ($scope, $http) {
  $http.get('js/gallery.json').success(function (data) {
    $scope.gallery = data;
    // console.log(service.gallery);
    // return data;
  });
  // $scope.gallery = galleryFactory.getGallery();
  // console.log($scope.gallery);
});
angular.module('app').controller('ContactsController', function ($scope) {

});

angular.module('app').controller('ErrorPageController', function ($scope) {

});
