(function (module) {

  var doctorQuizServices;
  doctorQuizServices.$inject=['$http' , 'localStorageManager' , 'urlFactory'];
 function doctorQuizServices ($http , localStorageManager , urlFactory) {

    var exports = {
      save_quiz: save_quiz,
      get_quizzes : get_quizzes ,
      update_quiz : update_quiz ,
      delete_quiz : delete_quiz ,
    }

    function save_quiz(data) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'doctor/1/quiz',
          data: data
      })
    };

    function delete_quiz(data) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'doctor/1/delete_quiz',
          data: data
      })
    };
    function update_quiz(data, index) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'doctor/1/edit_quiz',
          data: data
      })
    };

    function get_quizzes(data) {
      return $http({
          method: 'GET',
          url: urlFactory.test_local() + 'doctor/1/quiz?id='+String(data),
          data: data
      })      
    };


    return exports;
  };
  module.factory('doctorQuizServices', doctorQuizServices);
}(angular.module("Clarity.Services")));


