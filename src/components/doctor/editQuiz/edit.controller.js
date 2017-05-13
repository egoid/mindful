(function(module) {

  "use strict";
  var DoctorEditCtrl;
  DoctorEditCtrl.$inject = ['$state', 'doctorQuizServices', 'myCacheService'];

  function DoctorEditCtrl($state, doctorQuizServices, myCacheService) {
    
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
    vm.quiz_index = 0;
    vm.questions = [];
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
    vm.toggle_rubric = toggle_rubric;
    vm.static_grading_criteria = -1;
    vm.save = save;

    activate()
    
//********
//** 
//**  Exposed Functions
//**
    function activate() {
      var quizzes = doctorQuizServices.get_quizzes();
      var edit_title = myCacheService.get("preview")
      quizzes.forEach(function(quiz,i) {
        if (quiz.title === edit_title) {
          vm.quiz = quiz;
          vm.quiz_index = i
          if (quiz.static_rubric === true) {
            _bind_static_data();
          } else {
            _bind_data();
          }
        };
        if (i === quizzes.length -1) {
          if (!(vm.quiz)) {
            $state.go('doctor.questionnaire')
          }
        }
      })
    };
    function _bind_static_data() {
      if (vm.quiz.static_rubric === true) {
        toggle_rubric();
      };
      for (var key in vm.quiz.questions) {
        vm.data_questions_text[key] = vm.quiz.questions[key]
        add_question();
      };
      vm.title = vm.quiz.title
      vm.rubric_a = vm.quiz.rubric.statement.rubric_a
      vm.rubric_b = vm.quiz.rubric.statement.rubric_b
      vm.rubric_c = vm.quiz.rubric.statement.rubric_c
      vm.rubric_d = vm.quiz.rubric.statement.rubric_d
      vm.rubric_e = vm.quiz.rubric.statement.rubric_e
      vm.rubric_value_a = vm.quiz.rubric.value.value_a
      vm.rubric_value_b = vm.quiz.rubric.value.value_b
      vm.rubric_value_c = vm.quiz.rubric.value.value_c
      vm.rubric_value_d = vm.quiz.rubric.value.value_d
      vm.rubric_value_e = vm.quiz.rubric.value.value_e
    };
    function _bind_data() {
      for (var key in vm.quiz.questions) {
        vm.data_questions_text[key] = vm.quiz.questions[key]
        add_question();
      };
      for (var i=0; i < (Object.keys(vm.quiz.questions).length) ; i++) {
        vm.data_questions_a[i] = vm.quiz.rubric.questions.questions_a[i]
        vm.data_questions_b[i] = vm.quiz.rubric.questions.questions_b[i]
        vm.data_questions_c[i] = vm.quiz.rubric.questions.questions_c[i]
        vm.data_questions_d[i] = vm.quiz.rubric.questions.questions_d[i]
        vm.data_answers_a[i] = vm.quiz.rubric.answers.answers_a[i]
        vm.data_answers_b[i] = vm.quiz.rubric.answers.answers_b[i]
        vm.data_answers_c[i] = vm.quiz.rubric.answers.answers_c[i]
        vm.data_answers_d[i] = vm.quiz.rubric.answers.answers_d[i]
      }
      vm.title = vm.quiz.title
    };
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
      // doctorQuizServices.save_quiz(prepare_save())
      doctorQuizServices.update_quiz(prepare_save() , vm.quiz_index )
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


  module.controller('DoctorEditCtrl', DoctorEditCtrl);

})(angular.module('Clarity.Controllers'));
