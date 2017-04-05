(function(module) {
  "use strict";
  var capitalize;

  function capitalize() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }

  }
  module.filter('capitalize', capitalize);

})(angular.module('Clarity.Filters'));
