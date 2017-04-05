(function(module) {
  module.run(['$rootScope', '$state', '$timeout', '$document', runFunction]);


  function runFunction($rootScope, $state, $timeout, $document) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams, options) {
        // var userobj = authService.getCurrentUser();

        var currentstate = toState.name;

        if (!userobj) {

          switch (currentstate) {
            case "employer.signup":
              $timeout(function() {
                $state.go(currentstate, toParams);
              });
              break;
            default:
              $timeout(function() {
                $state.go('candidate.signup');
              });


          }


        } else {
          var user_type = userobj.user_type;
          if (user_type == 'employee') {

            switch (currentstate) {

              default:
                $timeout(function() {
                  $state.go(currentstate);
                });


            }


          } else if (user_type == 'employer') { 
            switch (currentstate) {
              default:
                $timeout(function() {
                  $state.go(currentstate);
                });


            }


          }
        }


      })
  };

}(angular.module("Clarity.Configs")));
