(function (module) {
  var localStorageManager;
  localStorageManager.$inject = ['$log', '$window'];
  function localStorageManager($log, $window) {
   

    var exports = {
      store: store,
      retrieve: retrieve,
      decode: decode,
      destroy: destroy
    };


    function store(key,data) {
      $window.localStorage.removeItem(key);
      $window.localStorage.setItem(key, JSON.stringify(data));
      return JSON.stringify(data);
    }

    function retrieve(key) {
      var item = $window.localStorage.getItem(key)
      if (item != "undefined"){
        return JSON.parse(item)
      } else {
        return undefined
      }
    }

    function decode(key) {
      var data = retrieve(key);
      if (data) {
        return $window.jwt_decode(data);
      } else {
        return null;
      }
    }

    function destroy(key) {
      $window.localStorage.removeItem(key);
    }

    return exports;

  }

  module.factory("localStorageManager", localStorageManager);

}(angular.module("Clarity.Services")));
