angular.module('app').controller('MainMenuController', function ($scope, $rootScope, $location) {
  // switching main menu
  $scope.toggleMenu = function () {
    $scope.showMenu = !$scope.showMenu;
    if (!$scope.showMenu) {
      $scope.closeThis();
    }
  };
  // closing the main menu and all dropdowns
  $scope.closeThis = function () {
    if ($scope.isOpenedDropdown || $scope.showMenu) {

      $scope.showMenu = false;
      $scope.closeDropdowns = true;
    }
  };
  // checking for ng-class for main menu item
  $scope.isActive = function (page) {
    var currentLocation = $location.path();
    var currentRoute = $rootScope.currentOriginalPath;
    if (currentLocation == page || currentRoute == page) {
      return true;
    } else {
      return false;
    };
  };
  // closing main menu and all dropdowns on route/location change
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
angular.module('app').controller('TechnologyController', function ($scope, $routeParams) {
  $scope.techId = $routeParams.techId;
});
angular.module('app').controller('GalleryController', function ($scope, $rootScope, $http, galleryFactory) {
  // retriving gallery form JSON
  $http.get('js/gallery.json').success(function (data) {
    $scope.gallery = data;
    $scope.listOfListId = [];
    // gathering the list of items id's
    angular.forEach($scope.gallery, function (item) {
      var self = this;
      if (self.indexOf(item.listId) < 0) {
        self.push(item.listId);
      };
    }, $scope.listOfListId);
  });
  // caching filtered list in gallery factory
  function setFilteredList () {
    galleryFactory.setFilteredList($scope.filteredList);
  };
  // caching sort name and direction in gallery factory
  function setSortBy () {
    galleryFactory.setSortBy($scope.propertyName, $scope.reverse);
  };
  // If previous page was gallery item page then we restore previous state of gallery from cache variables in gallery factory
  if ($rootScope.cachedGallery) {
    $scope.filteredList = galleryFactory.getFilteredList();
    $scope.propertyName = galleryFactory.getSotrBy().name;
    $scope.reverse = galleryFactory.getSotrBy().reverse;
  } else {
    $scope.filteredList = [];
    $scope.propertyName = 'title';
    $scope.reverse = false;
    setFilteredList();
    setSortBy();
  };
  // gallery sort by
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    setSortBy();
  };
  // Filter for gallery images. Two-way depending between buttons and gallery images
  $scope.filterBy = function (filterName) {
    if (filterName === 'showAll') {
      $scope.filteredList = [];
      setFilteredList();
      return;
    };
    if (filterName === 'hideAll') {
      $scope.filteredList = $scope.listOfListId.slice();
      setFilteredList();
      return;
    };
    var index = $scope.filteredList.indexOf(filterName);
    if (index < 0) {
      $scope.filteredList.push(filterName);
      setFilteredList();
    } else {
      $scope.filteredList.splice(index, 1);
      setFilteredList();
    };
  };
  // Custom controller's filter
  $scope.filterByFilteredList = function (listItem) {
    if ($scope.filteredList.indexOf(listItem.listId) < 0) {
      return listItem;
    };
  };
  // Defines ng-class for filtering buttons
  $scope.galleryBtnFilterIsActive = function(filterName) {
    if ($scope.filteredList.indexOf(filterName) < 0) {
      return true;
    } else {
      return false;
    }
  }

});
angular.module('app').controller('GalleryItemController', function ($scope, $routeParams, galleryFactory) {
  $scope.galleryItemId = $routeParams.galleryItemId;
});
angular.module('app').controller('ContactsController', function ($scope) {

});

angular.module('app').controller('ErrorPageController', function ($scope) {

});
