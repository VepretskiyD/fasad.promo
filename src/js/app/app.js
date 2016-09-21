angular.module('app', ['ngRoute', 'angular-click-outside', 'masonry']);
angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
    // saving current route/location in global scope
    if(current.$$route) {
      $rootScope.currentOriginalPath = current.$$route.originalPath;
      $rootScope.currentPath = $location.path();
    };
    // checking when gallery state needs to be cached. it happens when we going to gallery from gallery item
    if(previous && previous.$$route.controller == 'GalleryItemController' && current.$$route.controller == 'GalleryController') {
      $rootScope.cachedGallery = true;
    } else {
      $rootScope.cachedGallery = false;
    }
  });
});
angular.module('app').config(['$routeProvider', function ($routeProvide) {
  $routeProvide.
    when('/', {
      templateUrl: 'template/home.html',
      controller: 'HomeController'
    }).
    when('/about', {
      templateUrl: 'template/about.html',
      controller: 'AboutController'
    }).
    when('/why_us', {
      templateUrl: 'template/why_us.html',
      controller: 'WhyUsController'
    }).
    when('/technology/:techId', {
      templateUrl: 'template/technology.html',
      controller: 'TechnologyController'
    }).
    when('/technology', {
      redirectTo: '/'
    }).
    when('/gallery', {
      templateUrl: 'template/gallery.html',
      controller: 'GalleryController'
    }).
    when('/gallery/:galleryItemId', {
      templateUrl: 'template/galleryitem.html',
      controller: 'GalleryItemController'
    }).
    when('/contacts', {
      templateUrl: 'template/contacts.html',
      controller: 'ContactsController'
    }).
    when('/404', {
      templateUrl: 'template/404.html',
      controller: 'ErrorPageController'
    }).
    otherwise({
      redirectTo: '/404'
    });
}]);
