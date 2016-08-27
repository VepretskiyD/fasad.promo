angular.module('app').directive('menuDropdown', function() {
  return {
    // scope: {
    //   isOpenedDropdown: '='
    // },
    restrict: 'A',
    link: function(scope, elem, attrs) {
      // var dropdowns = document.querySelectorAll('#main-menu .menu__item__dropdown');
      elem.on('click', function(e) {
        e.preventDefault();
        if (elem.parent().hasClass('menu__item__dropdown--close')) {
          scope.isOpenedDropdown = true;
          // scope.$apply;
          // console.log('opened dropdown', scope.isOpenedDropdown);
        };
        elem.parent().toggleClass('menu__item__dropdown--close');
      });
    }
  };
});
angular.module('app').directive('watchDropdowns', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      scope.$watch('closeDropdowns', function(value) {
        var dropdowns = document.querySelectorAll('#main-menu .menu__item__dropdown');
        // console.log('closeDropdowns fired', value);
        if (scope.isOpenedDropdown || scope.closeDropdowns) {
          for (var i = 0; i < dropdowns.length; i++) {
            // console.log('switch off');
            if (!angular.element(dropdowns[i]).hasClass('menu__item__dropdown--close')) {
              // console.log('closing');
              angular.element(dropdowns[i]).addClass('menu__item__dropdown--close');
              // scope.$apply;
            }
          }
          scope.closeDropdowns = false;
          scope.isOpenedDropdown = false;
          // scope.$apply;

          // console.log('turned to false', scope.closeDropdowns);
        }
      });
    }
  };
});
angular.module('app').directive('accordion', function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      
    }
  };
});
