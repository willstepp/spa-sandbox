/* App Module */

var angularSandbox = angular.module('angularSandbox', [
  'ngRoute',
  'angularSandboxController',
  'angularSandboxService'
]);

//routes
angularSandbox.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/widgets', {
        templateUrl: 'views/index.html',
        controller: 'WidgetIndexController'
      }).
      when('/widgets/new', {
        templateUrl: 'views/new.html',
        controller: 'WidgetNewController'
      }).
      when('/widgets/:id', {
        templateUrl: 'views/show.html',
        controller: 'WidgetShowController'
      }).
      when('/widgets/:id/edit', {
        templateUrl: 'views/edit.html',
        controller: 'WidgetEditController'
      }).
      otherwise({
        redirectTo: '/widgets'
      });
  }]);