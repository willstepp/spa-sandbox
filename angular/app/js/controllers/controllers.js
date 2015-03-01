/* Controllers */

var angularSandboxController = angular.module('angularSandboxController', []);

//Widget Index
angularSandboxController.controller('WidgetIndexController', ['$scope', 'widgetService', '$window',

  function ($scope, widgetService, $window) {

    widgetService.all(function (widgets) {
      $scope.widgets = widgets;
      console.log($scope.widgets);
    }, function (err) {
      console.log('there was an error retrieving all widgets');
      console.log(err);
    });



    $scope.deleteWidget = function (id) {
      widgetService.destroy(id, function (res) {
        $window.location.reload();
      }, function (err) {
        console.log(err);
        alert('there was a problem deleting the widget');
      });
    };
    
  }

]);

//Widget New
angularSandboxController.controller('WidgetNewController', ['$scope', 'widgetService', '$location',

  function ($scope, widgetService, $location) {

    $scope.widget = {
      name:'',
      desc:'',
      price:0
    };

    $scope.saveWidget = function (widget) {
      widgetService.create(widget, function (widget) {
        alert('widget created!');
        $location.path('/widgets/' + widget.id);
      }, function (err) {
        console.log(err);
        alert('there was an error creating the widget!');
      });
    };
  }

]);

//Widget Show
angularSandboxController.controller('WidgetShowController', ['$scope', '$routeParams', 'widgetService',

  function ($scope, $routeParams, widgetService) {

    widgetService.get($routeParams.id, function (widget) {
      $scope.widget = widget;
      console.log($scope.widget);
    }, function (err) {
      console.log('there was an error retrieving the widget');
      console.log(err);
    });
    
  }

]);

//Widget Edit
angularSandboxController.controller('WidgetEditController', ['$scope', '$routeParams', 'widgetService', '$location',

  function ($scope, $routeParams, widgetService, $location) {

    widgetService.get($routeParams.id, function (widget) {
      $scope.widget = widget;
      console.log($scope.widget);
    }, function (err) {
      console.log('there was an error retrieving the widget');
      console.log(err);
    });

    $scope.updateWidget = function (widget) {
      widgetService.update(widget, function (widget) {
        alert('widget updated!');
        $location.path('/widgets/' + widget.id);
      }, function (err) {
        console.log(err);
        alert('there was an error creating the widget!');
      });
    };

  }

]);