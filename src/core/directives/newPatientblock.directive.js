(function(module) {
  // "use strict";

  newPatient.$inject = ['$state']


  function newPatient() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/newPatientBlock/newPatientBlock.html",
      controller: newPatientController,
      controllerAs: 'newPatientCtrl',
      scope: true,
      link: function(scope, element, attrs) {

      }

    };
    return directive;

    /** @ngInject */
    function newPatientController($state) { 
      
      var vm = this;

      vm.step_number = 1;


    }

  };
  module.directive('newPatient', newPatient);

})(angular.module('Clarity.Directives'));