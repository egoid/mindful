(function (module) {

  var userService;
  userService.$inject=['$timeout' , 'localStorageManager'];
 function userService ($timeout , localStorageManager) {

    var exports = {
      save: save,
    }

    function save(data) {
      var user_obj = {
        key : '1234' ,
        url : 'adamt949'
      }
      localStorageManager.store('user' , user_obj )
      return {
        status : 'OK' , 
        data: user_obj
      }

    };


    return exports;
  };
  module.factory('userService', userService);
}(angular.module("Clarity.Services")));


