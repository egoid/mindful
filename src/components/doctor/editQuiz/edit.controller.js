(function(module) {

  "use strict";
  var DoctorEditCtrl;
  DoctorEditCtrl.$inject = ['$state', 'doctorQuizServices', 'localStorageManager' , 'myCacheService'];

  function DoctorEditCtrl($state, doctorQuizServices, localStorageManager , myCacheService) {
    
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
    vm.metrics = [];
    vm.metrics_title = [];
    vm.metrics_bank = [];
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
    vm.toggle_metric = toggle_metric;
    vm.toggle_rubric = toggle_rubric;
    vm.static_grading_criteria = -1;
    vm.save = save;

    activate()
    
//********
//** 
//**  Exposed Functions
//**
    function activate() {
      var edit_title = myCacheService.get("preview")
      doctorQuizServices.get_quizzes(localStorageManager.retrieve('user')[0]).then(function(res) {
        res.data.forEach(function(quiz,i) {
          if (quiz.title === edit_title) {
            vm.quiz = quiz;
            var json = JSON.parse(vm.quiz.json);
            vm.quiz = json;
            vm.quiz_index = i
            vm.quiz_id = quiz.quiz_id;
            _bind_data();
          };
          if (i === res.data.length -1) {
            if (!(vm.quiz)) {
              $state.go('doctor.questionnaire')
            }
          }
        })
      })
    };
    function _bind_data() {
      if (vm.quiz.static_rubric === true) {
        toggle_rubric();
      };
      for (var key in vm.quiz.questions) {
        vm.data_questions_text[key] = vm.quiz.questions[key]
        add_question();
      };
      vm.title = vm.quiz.title
      if (vm.quiz.rubric.statement.rubric_a) { vm.rubric_a = vm.quiz.rubric.statement.rubric_a } 
      if (vm.quiz.rubric.statement.rubric_b) { vm.rubric_b = vm.quiz.rubric.statement.rubric_b } 
      if (vm.quiz.rubric.statement.rubric_c) { vm.rubric_c = vm.quiz.rubric.statement.rubric_c } 
      if (vm.quiz.rubric.statement.rubric_d) { vm.rubric_d = vm.quiz.rubric.statement.rubric_d } 
      if (vm.quiz.rubric.statement.rubric_e) { vm.rubric_e = vm.quiz.rubric.statement.rubric_e } 
      if (vm.quiz.rubric.value.value_a) { vm.rubric_value_a = vm.quiz.rubric.value.value_a } 
      if (vm.quiz.rubric.value.value_b) { vm.rubric_value_b = vm.quiz.rubric.value.value_b } 
      if (vm.quiz.rubric.value.value_c) { vm.rubric_value_c = vm.quiz.rubric.value.value_c } 
      if (vm.quiz.rubric.value.value_d) { vm.rubric_value_d = vm.quiz.rubric.value.value_d } 
      if (vm.quiz.rubric.value.value_e) { vm.rubric_value_e = vm.quiz.rubric.value.value_e } 
      (vm.quiz.metric.length > 0) ? vm.state = 'multiple_metric' : vm.state = 'single_metric';
      (vm.quiz.metric.length > 0) ? vm.metric_widget = 1 : vm.metric_widget = -1 ;
      vm.quiz.metric.forEach(function(m,i){
        vm.metrics_title.push(m.name)
        vm.metrics.push(m)
        vm.metrics_bank[m.name] = m.values
      })
    };
    function add_question() {
      vm.questions.push({
        id : vm.questions.length
      })
    };
    function toggle_metric(event_case) {
      if (event_case === 'default') {
        vm.metric_widget = -1
        vm.state = 'single_metric'
      } else {
        vm.metric_widget*=-1
        vm.state = 'multiple_metric'
      }
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
      // console.log(prepare_save())
      let session_key = localStorageManager.retrieve('user')[0]
      doctorQuizServices.update_quiz({
        title : vm.title ,
        session_key : session_key , 
        json : String(JSON.stringify(prepare_save())) , 
        quiz_id : vm.quiz_id ,
      }).then(function(res) {
        if (res.data === "OK") {
          $state.go('doctor.questionnaire')
        }
      })      
    };
    function toggle_rubric() {
      vm.static_grading_criteria*=-1
    };

//********
//** 
//**  Local Functions
//**

    function prepare_save() {
      if (vm.state === 'single_metric') {
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
          metric : []
        };
      } else {
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
          metric : vm.metrics_title.map(function(metric) {
              return {
                name : metric , 
                values : String(vm.metrics_bank[metric]).split(',')
              }
          })
        };
      };

    };

  }


  module.controller('DoctorEditCtrl', DoctorEditCtrl);

})(angular.module('Clarity.Controllers'));
