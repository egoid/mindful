(function(module) {

  "use strict";
  var DoctorNewQuizCtrl;
  DoctorNewQuizCtrl.$inject = ['$state', 'doctorQuizServices'];

  function DoctorNewQuizCtrl($state, doctorQuizServices) {
    
    var vm = this;

    var Quiz_data;
    vm.add_question = add_question;
    vm.data_questions_text = {};
    vm.data_questions_a = {};
    vm.data_questions_b = {};
    vm.data_questions_c = {};
    vm.data_questions_d = {};
    vm.data_questions_e = {};
    vm.data_answers_a = {};
    vm.data_answers_b = {};
    vm.data_answers_c = {};
    vm.data_answers_d = {};
    vm.data_answers_e = {};
    vm.remove = remove;
    vm.rubric_a;
    vm.rubric_b;
    vm.rubric_c;
    vm.rubric_d;
    vm.rubric_e;
    vm.rubric_value_a;
    vm.rubric_value_b;
    vm.rubric_value_c;
    vm.rubric_value_d;
    vm.rubric_value_e;
    vm.save = save;
    vm.static_grading_criteria = -1;
    vm.title = "";
    vm.toggle_rubric = toggle_rubric;
    vm.questions = [];

//********
//** 
//**  Exposed Functions
//**

    function add_question() {
      vm.questions.push({
        id : vm.questions.length
      })
    };
    function remove(id) {
      vm.questions.forEach(function(q,i) {
        if (q.id == id) {
          delete vm.questions.splice(i,1)
          var new_questions = [];
          vm.questions.forEach(function(x,i) {
            new_questions.push( {
              id : new_questions.length
            });
            if (i == vm.questions.length -1) {
              vm.questions = new_questions
            }
          })
        }
      })
    }
    function save() {
      doctorQuizServices.save_quiz(prepare_save())
      // localStorageManager.store('console.log(prepare_save())
      $state.go('doctor.questionnaire')
    };
    function toggle_rubric() {
      vm.static_grading_criteria*=-1
    };

//********
//** 
//**  Local Functions
//**

    function prepare_save() {
      if (vm.static_grading_criteria > 0) {
        return {
          questions : vm.data_questions_text ,
          title : vm.title ,
          rubric : {
            value : {
              value_a : vm.rubric_value_a || null ,
              value_b : vm.rubric_value_b || null ,
              value_c : vm.rubric_value_c || null ,
              value_d : vm.rubric_value_d || null ,
              value_e : vm.rubric_value_e || null ,
            } ,
            statement : {
              rubric_a : vm.rubric_a || null ,
              rubric_b : vm.rubric_b || null ,
              rubric_c : vm.rubric_c || null ,
              rubric_d : vm.rubric_d || null ,
              rubric_e : vm.rubric_e || null ,
            }
          },
          static_rubric : true
        };
      } else {
        return {
          questions : vm.data_questions_text ,
          title : vm.title ,
          rubric : {
            answers : {
              answers_a : vm.data_answers_a ,
              answers_b : vm.data_answers_b ,
              answers_c : vm.data_answers_c ,
              answers_d : vm.data_answers_d ,
              answers_e : vm.data_answers_e ,
            } , 
            questions : {
              questions_a : vm.data_questions_a ,
              questions_b : vm.data_questions_b ,
              questions_c : vm.data_questions_c ,
              questions_d : vm.data_questions_d ,
              questions_e : vm.data_questions_e ,
            },
          },
          static_rubric : false
        }
      }

    };

  }


  module.controller('DoctorNewQuizCtrl', DoctorNewQuizCtrl);

})(angular.module('Clarity.Controllers'));
