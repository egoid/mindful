(function(module) {
  "use strict";

  clarityNav.$inject = ['$state', 'localStorageManager' , 'loginFormService']

  function clarityNav( $state , localStorageManager , loginFormService ) {

    var directive = {
      restrict: "E",
      templateUrl: 'common/views/clarityNav/clarityNav.html',
      controller: clarityNavCtrl,
      controllerAs: 'clarityNavCtrl'

    };
    return directive;


    /** @ngInject */
    function clarityNavCtrl($state) {
      var vm = this;

      vm.state = $state;
      vm.logOut = logOut;
      vm.stateArray = [];
      var currentState = $state.current.name;
      var patientState = 'patient';
      var doctorState = 'doctor';

      if (currentState.indexOf(doctorState) > -1) {
        if (currentState == 'doctor.dashboard' || true ) {
          vm.menuItemRight = [{
            label: 'Logout',
            state: 'doctor.login'
          }];
          vm.menuItemLeft = [{
            label: 'Home',
            state: 'doctor.dashboard'
          }, {
            label: 'Your Questionnaires',
            state: 'doctor.questionnaire'
          }, {
            label: 'Your Patients',
            state: 'doctor.patients'
          }, {
            label: '',
            state: ''
          }, {
            label: '',
            state: ''
          }];
          vm.loggedin = false;
        }  else {
          //Menu Items for Employer
          vm.menuItemLeft = [{
            label: 'MY PROFILE',
            state: 'employer.dashboard'
          }, {
            label: 'CANDIDATES',
            state: 'employer.candidates'
          }, {
            label: 'TRACKER',
            state: 'employer.tracker'
          }, {
            label: 'INBOX',
            state: 'employer.inbox'
          }];
          vm.loggedin = true;
        }


      } else if (currentState.indexOf(candidateSTate) > -1) {
        if (currentState == 'candidate.login' || currentState == 'candidate.signup') {
          vm.menuItemRight = [{
            label: 'LOGIN',
            state: 'candidate.login'
          }, {
            label: 'FOR EMPLOYERS',
            state: 'employer.signup'
          }];
          vm.menuItemLeft = [{
            label: 'How it works?',
            state: 'candidate.howItWorks'
          }];
          vm.loggedin = false;
        } else if (currentState == 'candidate.howItWorks') {
          vm.menuItemRight = [{
            label: 'Land a job now!',
            state: 'candidate.login'
          }];        
        } else {
          vm.menuItemLeft = [{
            label: 'MY PROFILE',
            state: 'candidate.dashboard.home'
          }, {
            label: 'JOBS',
            state: 'candidate.jobs.list'
          }, {
            label: 'TRACKER',
            state: 'candidate.tracker'
          }, {
            label: 'INBOX',
            state: 'candidate.inbox'
          }];
          if (authService.getCurrentUser()) {

            vm.user = localStorageManager.retrieve(CURRENT_EMPLOYEE);
          }
          vm.loggedin = true;
        }
      };

      function logOut() {
        let session_key = localStorageManager.retrieve('user')[0]
        loginFormService.logOut({
          session_key : session_key
        }).then(function(res) {
          if (res.data === 'OK') {
            localStorageManager.destroy('user')
            $state.go('doctor.signup')
          }
        })
      }


    };
  }
  module.directive('clarityNav', clarityNav);

})(angular.module('Clarity.Directives'));
