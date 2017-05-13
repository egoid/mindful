(function(module) {

  "use strict";
  var DoctorQuestionnaireCtrl;
  DoctorQuestionnaireCtrl.$inject = ['$state', 'doctorQuizServices' ,'localStorageManager', 'myCacheService'];

  function DoctorQuestionnaireCtrl($state, doctorQuizServices, localStorageManager, myCacheService) {
    
    var vm = this;

    vm.delete_quiz = delete_quiz;
    vm.edit_quiz = edit_quiz;
    vm.quizzes = [];

    activate();

    function activate() {

      vm.quizzes = localStorageManager.retrieve('doctor_quizzes') || []

      add_default_quizzes()
    };
    function delete_quiz(title) {
      doctorQuizServices.delete_quiz(title)
      vm.quizzes = localStorageManager.retrieve('doctor_quizzes')
      add_default_quizzes()

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

      vm.quizzes.push({
        title : 'Default Psychology Quiz',
        state : 'doctor.newquiz'
      })
    }

  }


  module.controller('DoctorQuestionnaireCtrl', DoctorQuestionnaireCtrl);

})(angular.module('Clarity.Controllers'));
