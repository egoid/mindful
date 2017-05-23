(function(module) {
  // "use strict";

  loginForm.$inject = ['$state', 'localStorageManager', 'loginFormService']


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
    function loginFormController($state, localStorageManager, loginFormService) { 
      var vm = this;

      vm.logIn = logIn;
      vm.user_type = "Doctor" || "Patient";

      ///////////////

      function logIn(obj) {

        loginFormService.logIn({
          email : obj[0] , 
          password : obj[1] , 
        }).then(function(res) {
          if (res.status === 200) {
            localStorageManager.store('user', res.data)
            $state.go('doctor.dashboard')
          }
        })
      }

    }

  };
  module.directive('loginForm', loginForm);

})(angular.module('Clarity.Directives'));