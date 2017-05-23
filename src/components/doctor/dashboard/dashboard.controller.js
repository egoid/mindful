(function(module) {

  "use strict";
  var DoctorDashboardCtrl;
  DoctorDashboardCtrl.$inject = ['localStorageManager' ,'sqlService'];

  function DoctorDashboardCtrl(localStorageManager , sqlService) {
    
    var vm = this;
    vm.result = "Sql";
    vm.send = send;
    vm.url = localStorageManager.retrieve("user")[3]

    function send(q) {
      sqlService.query(q).then(function(res) {
        vm.result = JSON.stringify(res.data).replace(/,/g , "\n")
      })
    }
  }


  module.controller('DoctorDashboardCtrl', DoctorDashboardCtrl);

})(angular.module('Clarity.Controllers'));
