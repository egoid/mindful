(function (module) {

  var loginFormService;
  loginFormService.$inject=['$timeout'];
 function loginFormService ($timeout) {

    var exports = {
      logIn: logIn,
    }

    function logIn(data) {
      return {
        status : 'OK' , 
        data: {
          username : 'adam' , 
          key : '1234'
        }
      }

    };


    return exports;
  };
  module.factory('loginFormService', loginFormService);
}(angular.module("Clarity.Services")));


