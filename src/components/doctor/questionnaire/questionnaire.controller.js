(function(module) {

  "use strict";
  var DoctorQuestionnaireCtrl;
  DoctorQuestionnaireCtrl.$inject = ['$state', 'doctorQuizServices' ,'localStorageManager', 'myCacheService'];

  function DoctorQuestionnaireCtrl($state, doctorQuizServices, localStorageManager, myCacheService) {
    
    var vm = this;

    vm.delete_quiz = delete_quiz;
    vm.edit_quiz = edit_quiz;
    vm.quizzes = [];
    vm.go_preview = go_preview;

    activate();

    function activate() {

      doctorQuizServices.get_quizzes(localStorageManager.retrieve('user')[0])
      .then(function(res) {
        vm.quizzes = res.data || [];
        add_default_quizzes();
      }, function errorCallback(response) {
        console.log(response)
        add_default_quizzes();
      })

    };
    function go_preview(title) {
      vm.quizzes.forEach(function(quiz) {
        if (quiz.title == title) {
          myCacheService.put("quiz" , quiz );
          $state.go('doctor.previewQuiz')
        }
      })
    }
    function delete_quiz(title) {
      vm.quizzes.forEach(function(quiz , i ) {
        if( quiz.title === title ) {
          var id = quiz.quiz_id
          doctorQuizServices.delete_quiz({
            quiz_id : id ,
            session_key : localStorageManager.retrieve('user')[0] ,
          }).then(function(res) {
            delete vm.quizzes.splice(i,1)
          })
        }
      })
    };
    function edit_quiz(title) {
      myCacheService.put("preview", title)
      $state.go('doctor.edit')
    };
    function add_default_quizzes() {
      vm.quizzes.unshift({
        title : 'Create a new quiz' ,
        state : 'doctor.newquiz'
      })  

      // vm.quizzes.push({
      //   title : 'DASS-21 Questionnaire ',
      //   state : 'doctor.newquiz'
      // })
    }

  }


  module.controller('DoctorQuestionnaireCtrl', DoctorQuestionnaireCtrl);

})(angular.module('Clarity.Controllers'));
