(function(module) {
  // "use strict";

  patientCard.$inject = ['$state']


  function patientCard() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/patientCard/patientCard.html",
      // controller: patientCardController,
      // controllerAs: 'patientCardCtrl',
      scope: true,
      // link: function(scope, element, attrs) {
      // }

    };
    return directive;



  };
  module.directive('patientCard', patientCard);

})(angular.module('Clarity.Directives'));