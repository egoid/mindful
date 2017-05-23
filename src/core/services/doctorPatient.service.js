(function (module) {

  var doctorPatientServices;
  doctorPatientServices.$inject=['$http' , 'localStorageManager' , 'urlFactory'];
 function doctorPatientServices ($http , localStorageManager , urlFactory) {

    var exports = {
      create_patient: create_patient,
      get_patients : get_patients ,
      update_quiz : update_quiz ,
      delete_quiz : delete_quiz ,
    }

    function create_patient(data) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'doctor/1/patient',
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


    function get_patients(data) {
      return $http({
          method: 'GET',
          url: urlFactory.test_local() + 'doctor/1/patient?id='+String(data),
          data: data
      })  
    };

    return exports;
  };
  module.factory('doctorPatientServices', doctorPatientServices);
}(angular.module("Clarity.Services")));


