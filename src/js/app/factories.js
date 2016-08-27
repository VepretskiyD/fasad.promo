angular.module('app').factory('galleryFactory', function ($http) {
  var service = {};
  // var gallery;
  service.getGallery = function () {
    $http.get('js/gallery.json').success(function (data) {
      service.gallery = data;
      console.log(service.gallery);
      return data;
    });
  }



  return service;
});
