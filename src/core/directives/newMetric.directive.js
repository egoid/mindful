(function(module) {
  // "use strict";

  newMetric.$inject = ['$state']


  function newMetric() {

    var directive = {
      restrict: "E",
      templateUrl: "common/views/newMetric/newMetric.html",
      // controller: newMetricController,
      // controllerAs: 'newMetricCtrl',
      scope: true,
      // link: function(scope, element, attrs) {
      // }

    };
    return directive;

    /** @ngInject */
    // function newMetricController($state) { 
      
    //   var vm = this;

    //   vm.step_number = 1;


    // }

  };
  module.directive('newMetric', newMetric);

})(angular.module('Clarity.Directives'));