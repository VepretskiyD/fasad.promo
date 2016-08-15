angular.module('app').directive('menuDropdown', function() {
  return {
    link: function(scope, elem, attrs) {
      var dropdowns = document.querySelectorAll('#main-menu .menu__item__dropdown');
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
        // console.log('closeDropdowns fired', value);
        if (value) {
          for (var i = 0; i < dropdowns.length; i++) {
            // console.log('switch off');
            if (!angular.element(dropdowns[i]).hasClass('menu__item__dropdown--close')) {
              angular.element(dropdowns[i]).addClass('menu__item__dropdown--close');
            }
          }
          scope.closeDropdowns = false;
          // console.log('turned to false', scope.closeDropdowns);
        }
      });
    }
  };
});
