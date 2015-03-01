var angularSandboxService = angular.module('angularSandboxService', []);

angularSandboxService.factory('widgetService', ['$http',

  function ($http) {
    var service = {};

    service.all = function (callback, errback) {
      $http.get('http://localhost:3000/widgets.json')
      .then(function (res) {
        callback(res.data);
      }, function (err) {
        errback(err);
      });
    };

    service.get = function (id, callback, errback) {
      $http.get('http://localhost:3000/widgets/' + id + '.json')
      .then(function (res) {
        callback(res.data);
      }, function (err) {
        errback(err);
      });
    };

    service.create = function (widget, callback, errback) {
      $http.post('http://localhost:3000/widgets.json', {widget:widget}).
        success(function(data, status, headers, config) {
          callback(data);
        }).
        error(function(data, status, headers, config) {
          errback(data);
        });
    };

    service.update = function (widget, callback, errback) {
      $http.put('http://localhost:3000/widgets/' + widget.id + '.json', {widget:widget}).
        success(function(data, status, headers, config) {
          callback(data);
        }).
        error(function(data, status, headers, config) {
          errback(data);
        });
    };

    service.destroy = function (id, callback, errback) {
      $http.delete('http://localhost:3000/widgets/' + id + '.json').
        success(function(data, status, headers, config) {
          callback(data);
        }).
        error(function(data, status, headers, config) {
          errback(data);
        });
    };

    return service;
  }
]);
