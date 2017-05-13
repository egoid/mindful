(function(module) {

  "use strict";
  var DoctorPatientsCtrl;
  DoctorPatientsCtrl.$inject = ['$state','localStorageManager','myCacheService'];

  function DoctorPatientsCtrl($state, localStorageManager, myCacheService) {
    
    var vm = this;

    vm.actions = {
      close_creation : close_creation ,
      patient_creation : patient_creation
    } 

    function close_creation() {
      vm.reveal_new = false
    }

    function patient_creation() {
      vm.reveal_new = true
    }
  }


  module.controller('DoctorPatientsCtrl', DoctorPatientsCtrl);

})(angular.module('Clarity.Controllers'));
