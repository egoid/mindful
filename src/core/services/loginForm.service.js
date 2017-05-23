(function (module) {

  var loginFormService;
  loginFormService.$inject=['$http' , 'urlFactory'];
 function loginFormService ($http , urlFactory) {

    var exports = {
      logIn: logIn,
      register : register ,
      logOut : logOut ,
    }

    function logIn(data) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'auth/1/login' ,
          data: data
      })
    };

    function logOut(data) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'auth/1/logout' ,
          data: data
      })      
    }

    function register(data) {
      return $http({
          method: 'POST',
          url: urlFactory.test_local() + 'auth/1/register' ,
          data: data
      })
    };


    return exports;
  };
  module.factory('loginFormService', loginFormService);
}(angular.module("Clarity.Services")));


