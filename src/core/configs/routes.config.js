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



          $urlRouterProvider.otherwise('/doctor/signup');
        }


      })();
