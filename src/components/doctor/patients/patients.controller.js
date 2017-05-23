(function(module) {

  "use strict";
  var DoctorPatientsCtrl;
  DoctorPatientsCtrl.$inject = ['$state', 'doctorPatientServices' , 'localStorageManager','myCacheService' ,];

  function DoctorPatientsCtrl($state, doctorPatientServices , localStorageManager, myCacheService) {
    
    var vm = this;

    vm.patients = [];

    vm.actions = {
      close_creation : close_creation ,
      patient_creation : patient_creation ,
      save_patient : save_patient ,
      show_details : show_details ,
      show_send : show_send ,
    } 

    activate();

    function activate() {
      let session_key = localStorageManager.retrieve('user')[0]
      doctorPatientServices.get_patients(session_key).then(function(res) {
        vm.patients = res.data
        vm.patients.map(function(guy) {
          guy.show_details = -1
          guy.show_send = -1
          return guy
        })
      })
    }

    function save_patient() {
      let session_key = localStorageManager.retrieve('user')[0]
      doctorPatientServices.create_patient({
        session_key :  session_key ,
        username :  vm.username ,
        password :  vm.password ,
        name : vm.name ,
        email :  vm.email ,
        phone :  vm.phone ,
      }).then(function(res) {
        if (res.data === 'OK') {
          close_creation();
          activate();
        }
      })
    };
    function show_details(username) {
      vm.patients.forEach(function(patient) {
        if (patient.username === username) {
          patient.show_details *= -1
        }
      })
    }
    function show_send(username) {
      vm.patients.forEach(function(patient) {
        if (patient.username === username) {
          patient.show_send *= -1
        }
      })
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
