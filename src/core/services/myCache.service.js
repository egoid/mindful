(function(module) {
  'use strict';
  myCacheService.$inject = ['$cacheFactory'];

  function myCacheService($cacheFactory) {

    return $cacheFactory('myData');


  };

  module.factory("myCacheService", myCacheService);

})(angular.module('Clarity.Services'));
