/* Controllers */

var angularSandboxController = angular.module('angularSandboxController', []);

//Widget Index
angularSandboxController.controller('WidgetIndexController', ['$scope',

  function ($scope) {

    $.get('http://localhost:3000/widgets.json', function (w) {
      $scope.widgets = w;
      console.log($scope.widgets);
      $scope.$apply();
    });
    
  }

]);

//Widget Show
angularSandboxController.controller('WidgetShowController', ['$scope', '$routeParams',

  function ($scope, $routeParams) {

    $.get('http://localhost:3000/widgets/' + $routeParams.id + '.json', function (w) {
      $scope.widget = w;
      console.log($scope.widget);
      $scope.$apply();
    });
    
  }

]);