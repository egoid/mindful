(function(module) {
  // "use strict";

  registerForm.$inject = ['$state']


  function registerForm() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/registerForm/registerForm.html",
      // controller: registerFormController,
      // controllerAs: 'registerFormCtrl',
      scope: true,
      // link: function(scope, element, attrs) {
      // }

    };
    return directive;

    /** @ngInject */


  };
  module.directive('registerForm', registerForm);

})(angular.module('Clarity.Directives'));