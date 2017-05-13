(function (module) {

  var doctorQuizServices;
  doctorQuizServices.$inject=['localStorageManager'];
 function doctorQuizServices (localStorageManager) {

    var exports = {
      save_quiz: save_quiz,
      get_quizzes : get_quizzes ,
      update_quiz : update_quiz ,
      delete_quiz : delete_quiz ,
    }

    function save_quiz(data) {
      if (!(localStorageManager.retrieve('doctor_quizzes'))){
        localStorageManager.store('doctor_quizzes' , [data] )
      } else {
        var old_quizzes = localStorageManager.retrieve('doctor_quizzes');
        old_quizzes.push(data);
        localStorageManager.store('doctor_quizzes' , old_quizzes )
      }
    };

    function delete_quiz(data) {
      var old_quizzes = localStorageManager.retrieve('doctor_quizzes');
      old_quizzes.forEach(function(quiz , i) {
        if (quiz.title == data) {
          old_quizzes.splice(i,1)
          localStorageManager.store('doctor_quizzes' , old_quizzes )
        }
      })
    };
    function update_quiz(data, index) {
      var quizzes = localStorageManager.retrieve('doctor_quizzes')
      quizzes[index] = data
      localStorageManager.store('doctor_quizzes' , quizzes)
    };

    function get_quizzes() {
      return localStorageManager.retrieve('doctor_quizzes')
    };


    return exports;
  };
  module.factory('doctorQuizServices', doctorQuizServices);
}(angular.module("Clarity.Services")));


