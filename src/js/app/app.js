angular.module('app', ['ngRoute', 'angular-click-outside', 'masonry']);
angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
    // console.log(current);
    if(current.$$route) {
      $rootScope.currentOriginalPath = current.$$route.originalPath;
      $rootScope.currentPath = $location.path();
    }
  });
  // $rootScope.$on('$locationChangeSuccess', function (event, next, current) {
    // $rootScope.currentPath = next;
    // console.log('location changed ', $location.path());
  // })
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
