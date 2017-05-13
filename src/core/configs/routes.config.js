      (function () {
        'use strict';

        angular
          .module('Clarity.Configs')
          .config(routesProvider)

        function scrollContent($window) {
              $window.scrollTo(0,0)
        };

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          // Employer States

          .state('patient', {
            abstract: true,
            template: "<ui-view />",
            url: '/patient',
            onEnter: scrollContent
          })


          .state('patient.signup', {
              url: '/signup', 
              templateUrl: 'components/patient/signup/signup.html',
              controller: 'patientSignupCtrl',
              controllerAs: 'signup',
              onEnter: scrollContent
            })
            

          // Candidate States
          .state('doctor', {
              abstract: true,
              url: '/doctor',
              template: '<ui-view />',
              onEnter: scrollContent
            })  
            .state('doctor.signup', {
              url: '/signup',
              templateUrl: 'components/doctor/signup/signup.html',
              controller: 'DoctorSignupCtrl',
              controllerAs: 'doctorSignup',
              onEnter: scrollContent
            })
            .state('doctor.dashboard', {
              url: '/dashboard',
              templateUrl: 'components/doctor/dashboard/dashboard.html',
              controller: 'DoctorDashboardCtrl',
              controllerAs: 'doctorDashboard',
              onEnter: scrollContent
            })
            .state('doctor.questionnaire', {
              url: '/questionnaire',
              templateUrl: 'components/doctor/questionnaire/questionnaire.html',
              controller: 'DoctorQuestionnaireCtrl',
              controllerAs: 'doctorQuestionnaire',
              onEnter: scrollContent
            })
            .state('doctor.newquiz', {
              url: '/newquiz',
              templateUrl: 'components/doctor/newquiz/newQuiz.html',
              controller: 'DoctorNewQuizCtrl',
              controllerAs: 'doctorNewQuiz',
              onEnter: scrollContent
            })
            .state('doctor.edit', {
              url: '/edit',
              templateUrl: 'components/doctor/editQuiz/edit.html',
              controller: 'DoctorEditCtrl',
              controllerAs: 'doctorNewQuiz',
              onEnter: scrollContent
            })
            .state('doctor.previewQuiz', {
              url: '/preview',
              templateUrl: 'components/doctor/previewQuiz/previewQuiz.html',
              controller: 'DoctorPreviewQuizCtrl',
              controllerAs: 'doctorPreview',
              onEnter: scrollContent
            })
            .state('doctor.patients', {
              url: '/patients',
              templateUrl: 'components/doctor/patients/patients.html',
              controller: 'DoctorPatientsCtrl',
              controllerAs: 'doctorPatients',
              onEnter: scrollContent
            })



          $urlRouterProvider.otherwise('/doctor/signup');
        }


      })();
