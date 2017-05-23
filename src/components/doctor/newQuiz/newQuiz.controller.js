(function(module) {

  "use strict";
  var DoctorNewQuizCtrl;
  DoctorNewQuizCtrl.$inject = ['$scope' , '$state', 'doctorQuizServices' , 'localStorageManager'];

  function DoctorNewQuizCtrl($scope , $state, doctorQuizServices , localStorageManager) {
    
    var vm = this;

    var Quiz_data;
    vm.add_question = add_question;
    vm.add_metric = add_metric;
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
    vm.metric_widget = -1;
    vm.metric_resolve = [];
    vm.metric_test = metric_test ; 
    vm.metrics_bank = {};
    vm.metric_numbers = [];
    vm.metrics_title = [];
    vm.metric_check = [];
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
    vm.searchTerm = ''
    vm.static_grading_criteria = 1;
    vm.title = "";
    vm.toggle_rubric = toggle_rubric;
    vm.toggle_metric = toggle_metric;
    vm.questions = [];

    vm.metrics = [
      {
        metric : 'Example -  Depression' ,
        example : 'Example - 1,2,3' ,
        target : []
      },
      {
        metric : 'Example -  Anxiety' ,
        example : 'Example - 4,5,6' ,
        target : []
      },
      {
        metric : 'Example -  Stress' ,
        example : 'Example - 7,8,9' ,
        target : []
      },
    ];    

//********
//** 
//**  Exposed Functions
//**

    function add_metric() {
      vm.metrics.push({
        metric : 'Your Metric' ,
        example : 'Quiz Question #\'s',
        target : []
      })
    } 
    function add_question() {
      vm.questions.push({
        id : vm.questions.length
      })
    };
    function metric_test(string) {
      var old = vm.metric_resolve;
      vm.metric_resolve = [];
      var tasks = [ number_test , character_test , correctness_check ]
      var count = -1;

      $scope.$on('metric' , function(event, val) {
        count+= 1
        tasks[count](old,string);
      });

      $scope.$emit('metric' , true)
    };

    function number_test(old,string) {
      var arr = string.split(',')
      var error_array = []
      arr.forEach(function(number) {

        if (Number(number) > vm.questions.length) {
          error_array.push("Question #" + number + " doesn't exists!" )
        }

        if (number == arr.length - 1 || arr.length == 1) {

          if (error_array.length > 0) {
            vm.metric_resolve = error_array;
          }
          $scope.$emit('metric' , true )
        }

      })
    };
    function character_test(old,string) {
      if (string.match(/\D/g)) {
        string.match(/\D/g).forEach(function(character,i) {
          if (character !== ',') {
            vm.metric_resolve.push("Metric Targets cannot include any characters except commas!")
          }
          if (i === string.length - 1 || string.length == 1) {
            $scope.$emit('metric', true )
          }
        });      
      } else {
        $scope.$emit('metric' , true )
      }
    };
    function correctness_check(old,string) {
      vm.metric_check = [];
      for (var key in vm.metrics_bank) {
        var arr = vm.metrics_bank[key].split(",")
        if (arr) {
          arr.forEach(function(key , i) {
              vm.metric_check[key-1] = true
            if (i == arr.length - 1) {
              console.log(vm.metric_check)
            }
          })
        }
      }
    }
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
      let session_key = localStorageManager.retrieve('user')[0]
      doctorQuizServices.save_quiz({
        title : vm.title ,
        session_key : session_key , 
        json : String(JSON.stringify(prepare_save()))
      }).then(function(res) {
        if (res.data === "OK") {
          $state.go('doctor.questionnaire')
        }
      })
    };
    function toggle_rubric() {
      vm.static_grading_criteria*=-1
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
    function metrics() {
      return [
      {
        metric : 'Example -  Depression' ,
        example : 'Example - 1,2,3' ,
        target : []
      },
      {
        metric : 'Example -  Anxiety' ,
        example : 'Example - 4,5,6' ,
        target : []
      },
      {
        metric : 'Example -  Stress' ,
        example : 'Example - 7,8,9' ,
        target : []
      },
      ]
    }


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


  module.controller('DoctorNewQuizCtrl', DoctorNewQuizCtrl);

})(angular.module('Clarity.Controllers'));
