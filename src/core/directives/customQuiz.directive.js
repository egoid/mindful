(function(module) {
  // "use strict";

  customQuiz.$inject = ['$state' , 'myCacheService']


  function customQuiz() {

    var directive = {
      restrict: "E",
      templateUrl: "common/views/customQuiz/customQuiz.html",
      controller: customQuizController,
      controllerAs: 'customQuizCtrl',
      scope: true,

    };
    return directive;


    /** @ngInject */
    function customQuizController($state , myCacheService) { 
      
      var vm = this;
      vm.preview = preview;

      function preview(title) {
        myCacheService.put("preview",title)
        $state.go("doctor.previewQuiz")
      }

    }

  };
  module.directive('customQuiz', customQuiz);

})(angular.module('Clarity.Directives'));