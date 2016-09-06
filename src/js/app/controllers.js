angular.module('app').controller('MainMenuController', function ($scope, $rootScope, $location) {
  $scope.toggleMenu = function () {
    $scope.showMenu = !$scope.showMenu;
    if (!$scope.showMenu) {
      $scope.closeThis();
    }
  }
  $scope.closeThis = function () {
    if ($scope.isOpenedDropdown || $scope.showMenu) {

      $scope.showMenu = false;
      $scope.closeDropdowns = true;
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
    $scope.closeThis();
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
    $scope.listOfListId = [];
    angular.forEach($scope.gallery, function (item) {
      var self = this;
      if (self.indexOf(item.listId) < 0) {
        self.push(item.listId);
      };
    }, $scope.listOfListId);
  });
  $scope.propertyName = 'title';
  $scope.reverse = false;
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  $scope.filteredList = [];
  $scope.filterBy = function (filterName) {
    if (filterName === 'showAll') {
      $scope.filteredList = [];
      return;
    };
    if (filterName === 'hideAll') {
      $scope.filteredList = $scope.listOfListId.slice();
      return;
    };
    var index = $scope.filteredList.indexOf(filterName);
    if (index < 0) {
      $scope.filteredList.push(filterName);
    } else {
      $scope.filteredList.splice(index, 1);
    };
  };
  $scope.filterByFilteredList = function (listItem) {
    // console.log(listItem.listId);
    if ($scope.filteredList.indexOf(listItem.listId) < 0) {
      return listItem;
    };
  };
  $scope.galleryBtnFilterIsActive = function(filterName) {
    if ($scope.filteredList.indexOf(filterName) < 0) {
      return true;
    } else {
      return false;
    }
  }

});
angular.module('app').controller('ContactsController', function ($scope) {

});

angular.module('app').controller('ErrorPageController', function ($scope) {

});
