/* App Module */

var angularSandbox = angular.module('angularSandbox', [
  'ngRoute',
  'angularSandboxController'
]);

//routes
angularSandbox.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/widgets', {
        templateUrl: 'views/index.html',
        controller: 'WidgetIndexController'
      }).
      otherwise({
        redirectTo: '/widgets'
      });
  }]);