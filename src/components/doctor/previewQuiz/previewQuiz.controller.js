(function(module) {

  "use strict";
  var DoctorPreviewQuizCtrl;
  DoctorPreviewQuizCtrl.$inject = ['$state','localStorageManager','myCacheService'];

  function DoctorPreviewQuizCtrl($state, localStorageManager, myCacheService) {
    
    var vm = this;
    vm.select = select;
    vm.selected_codex = []
    vm.quiz_title = myCacheService.get("preview")

    activate();

    function activate() {
      var quiz = myCacheService.get("quiz")
      var parse = JSON.parse(quiz.json)
      quiz.json = parse
      vm.quiz = quiz.json
    };
    function select(id , answer) {
      vm.selected_codex[id] = answer
    }

  }


  module.controller('DoctorPreviewQuizCtrl', DoctorPreviewQuizCtrl);

})(angular.module('Clarity.Controllers'));
