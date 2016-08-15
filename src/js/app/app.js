angular.module('app', ['ngRoute', 'angular-click-outside']);
angular.module('app').run(function ($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject, $location) {
    if(current.$$route) {
      $rootScope.currentPath = current.$$route.originalPath;
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
    when('/404', {
      templateUrl: 'template/404.html',
      controller: 'ErrorPageController'
    }).
    otherwise({
      redirectTo: '/404'
    });
}]);
