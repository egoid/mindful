(function (module) {
  
  urlFactory.$inject = [];

  function urlFactory() {

    var exports = {
      test_local : test_local ,
    };

    function test_local() {
      return "http://localhost:3020/"
    }



    return exports

  }


  module.factory("urlFactory", urlFactory);

}(angular.module("Clarity.Services")));

