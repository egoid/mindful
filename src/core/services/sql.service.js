(function (module) {
  
  sqlService.$inject = ['$http' , 'urlFactory'];

  function sqlService($http , urlFactory) {

    var exports = {
      query : query ,
    };

    function query(data) {
        return $http({
            method: 'GET',
            url: urlFactory.test_local() + 'admin/1/query?query=' + String(data),
            data: data
        })
    };


    return exports

  }


  module.factory("sqlService", sqlService);

}(angular.module("Clarity.Services")));

