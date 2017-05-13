(function(module) {

  "use strict";
  var DoctorSignupCtrl;
  DoctorSignupCtrl.$inject = ['$state' , 'userService'];

  function DoctorSignupCtrl($state , userService) {
    
    var vm = this;

    vm.state = "";

    vm.actions = {
      home: home , 
      login : login , 
      register : register ,
      save_user : save_user ,
    }

    function home() {
      vm.state = ''
    }
    function login() {
      vm.state = 'login'
    }

    function register() {
      vm.state = 'register'
    }

    function save_user() {

      if (vm.first_name !== '' && vm.last_name !== '' && vm.email !== '' && vm.password !== '' ) {   
        var send_obj = {
          first_name : vm.first_name , 
          last_name : vm.last_name , 
          email : vm.email , 
          password : vm.password , 
        }
        if ((userService.save(send_obj).status) === 'OK') {
          $state.go('doctor.dashboard')
        }
      }


    }


  }


  module.controller('DoctorSignupCtrl', DoctorSignupCtrl);

})(angular.module('Clarity.Controllers'));
