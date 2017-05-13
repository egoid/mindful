(function(module) {
  // "use strict";

  quiz.$inject = ['$state']


  function quiz() {
    var quiz_number;
    var directive = {
      restrict: "E",
      templateUrl: "common/views/quiz/quiz.html",
      // controller: quizController,
      // controllerAs: 'quizCtrl',
      scope: true,
      // link: function(scope, element, attrs) {
      // }

    };
    return directive;

    /** @ngInject */
    // function quizController($state) { 
      
    //   var vm = this;

    //   vm.step_number = 1;


    // }

  };
  module.directive('quiz', quiz);

})(angular.module('Clarity.Directives'));