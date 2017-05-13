(function(module) {

  "use strict";
  var DoctorPreviewQuizCtrl;
  DoctorPreviewQuizCtrl.$inject = ['$state','localStorageManager','myCacheService'];

  function DoctorPreviewQuizCtrl($state, localStorageManager, myCacheService) {
    
    var vm = this;
    vm.select = select;
    vm.selected_codex = []
    vm.quiz_title = myCacheService.get("preview")

    activate();

    function activate() {
      var quizzes = localStorageManager.retrieve('doctor_quizzes')
      quizzes.forEach(function(quiz,i) {
        if (quiz.title === vm.quiz_title) {
          vm.quiz = quiz;
        }

        if (i+1 === quizzes.length) {
          if (!(vm.quiz)) {
            $state.go('doctor.questionnaire')
          }
        }
      })
    };
    function select(id , answer) {
      vm.selected_codex[id] = answer
    }

  }


  module.controller('DoctorPreviewQuizCtrl', DoctorPreviewQuizCtrl);

})(angular.module('Clarity.Controllers'));
