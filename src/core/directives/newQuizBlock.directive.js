(function(module) {
  // "use strict";

  newQuiz.$inject = ['$state']


  function newQuiz() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/newQuizBlock/newQuizBlock.html",
      controller: newQuizController,
      controllerAs: 'newQuizCtrl',
      scope: true,
      link: function(scope, element, attrs) {
        scope.quiz_number = attrs.number
      }

    };
    return directive;

    /** @ngInject */
    function newQuizController($state) { 
      
      var vm = this;

      vm.step_number = 1;


    }

  };
  module.directive('newQuiz', newQuiz);

})(angular.module('Clarity.Directives'));