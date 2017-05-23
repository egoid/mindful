(function(module) {
  // "use strict";

  registerForm.$inject = ['$state']


  function registerForm() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/registerForm/registerForm.html",
      controller: registerFormController,
      controllerAs: 'registerFormCtrl',
      scope: true,
      // link: function(scope, element, attrs) {
      // }

    };
    return directive;

    /** @ngInject */
    function registerFormController($state, localStorageManager, loginFormService) { 
      var vm = this;

      vm.save = save;
      vm.user_type = "Doctor" || "Patient";

      ///////////////

      function save() {
        loginFormService.register({
          first_name : vm.first_name , 
          last_name : vm.last_name , 
          email : vm.email , 
          password : vm.password , 
          user_type : 'doctor'
        }).then(function(res) {
          if (res.status === 200) {
            localStorageManager.store('user', res.data)
            $state.go('doctor.dashboard')
          }
        })
      }

    }


  };
  module.directive('registerForm', registerForm);

})(angular.module('Clarity.Directives'));