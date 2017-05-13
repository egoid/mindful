(function(module) {
  // "use strict";

  loginForm.$inject = ['$state', 'loginFormService']


  function loginForm() {

    var directive = {
      restrict: "E",
      templateUrl: "common/views/loginForm/loginForm.html",
      controller: loginFormController,
      controllerAs: 'loginFormCtrl',
      scope: true,

    };
    return directive;


    /** @ngInject */
    function loginFormController($state, loginFormService) { 
      var vm = this;

      vm.logIn = logIn;
      vm.user_type = "Doctor" || "Patient";

      ///////////////

      function logIn() {

        var payload = loginFormService.logIn();
        if ( payload.status === 'OK') {

          $state.go('doctor.dashboard')

        }
      }

    }

  };
  module.directive('loginForm', loginForm);

})(angular.module('Clarity.Directives'));