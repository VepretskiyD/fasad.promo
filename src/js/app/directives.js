angular.module('app').directive('menuDropdown', function() {
  return {
    link: function(scope, elem, attrs) {
      elem.on('click', function(e) {
        e.preventDefault();
        elem.parent().toggleClass('menu__item__dropdown--close');
      });
    }
  };
});
angular.module('app').directive('watchDropdowns', function() {
  return {
    link: function(scope, elem, attrs) {
      scope.$watch('closeDropdowns', function(value) {
        var dropdowns = document.querySelectorAll('#main-menu .menu__item__dropdown');
        if (value) {
          for (var i = 0; i < dropdowns.length; i++) {
            if (!angular.element(dropdowns[i]).hasClass('menu__item__dropdown--close')) {
              angular.element(dropdowns[i]).addClass('menu__item__dropdown--close');
            }
          }
          scope.closeDropdowns = false;
        }
      });
    }
  };
});
