// (function(module) {
//   module.run(['$rootScope', '$state', '$timeout', '$document', runFunction]);


//   function runFunction($rootScope, $state, $timeout, $document) {
//     $rootScope.$on('$stateChangeStart',
//       function(event, toState, toParams, fromState, fromParams, options) {
//         // var userobj = authService.getCurrentUser();
//         var userobj = { user_type : 'doctor'}

//         var currentstate = toState.name;

//         if (!userobj) {

//           switch (currentstate) {
//             case "employer.signup":
//               $timeout(function() {
//                 $state.go(currentstate, toParams);
//               });
              
//             default:
//               $timeout(function() {
//                 $state.go('candidate.signup');
//               });


//           }


//         } else {
//           var user_type = userobj.user_type;
//           if (user_type == 'doctor') {

//             switch (currentstate) {
//               default:
//                 $timeout(function() {
//                   console.log(currentstate)
//                   $state.go(currentstate);
//                 });
//                 break;



//             }


//           } else if (user_type == 'patient') { 
//             switch (currentstate) {
//               default:
//                 $timeout(function() {
//                   $state.go(currentstate);
//                 });



//             }


//           }
//         }


//       })
//   };

// }(angular.module("Clarity.Configs")));
