(function() {
  'use strict'

  angular
    .module('Clarity', ['Clarity.Controllers',
      'Clarity.Services',
      'Clarity.Configs',
      'Clarity.Directives',
      'Clarity.Constants',
      'Clarity.Filters',
      'ui.router'
    ])

  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams, $state) {
      // console.log('Traveling to ' + toState.url, toState);
      // $rootScope.contentTitle = ;


      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        event.preventDefault();
        //   console.log("your state error", error)
      })
    })
  })

})();
