(function(module) {
  // "use strict";

  newRubric.$inject = ['$state']


  function newRubric() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/newRubric/newRubric.html",
      // controller: newRubricController,
      // controllerAs: 'newRubricCtrl',
      scope: true,
      // link: function(scope, element, attrs) {
      // }

    };
    return directive;

    /** @ngInject */
    function newRubricController($state) { 
      
      var vm = this;

      vm.step_number = 1;


    }

  };
  module.directive('newRubric', newRubric);

})(angular.module('Clarity.Directives'));