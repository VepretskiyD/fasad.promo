angular.module('app').factory('galleryFactory', function ($http) {
  var service = {};
  // caches the gallery state, filtered and sortered array
  var filteredList = [];
  var name;
  var reverse;
  // getters
service.getFilteredList = function () {
  return filteredList;
};
service.getSotrBy = function () {
  return {
    'name': name,
    'reverse': reverse
  };
};
// setters
service.setFilteredList = function (list) {
  filteredList = list;
};
service.setSortBy = function (newName, newReverse) {
  name = newName;
  reverse = newReverse;
};
  return service;
});
