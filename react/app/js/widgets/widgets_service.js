var spa = spa || {};
spa.widgets = spa.widgets || {};

spa.widgets.service = (function () {

  var ajax = null;

  function init (ajaxModule) {
    ajax = ajaxModule;
  }

  function all (callback, errback) {
    ajax.get('http://localhost:3000/widgets.json', function (widgets) {
      callback(widgets);
    }, function (err) {
      errback(err);
    });
  }

  function get () {

  }

  function create () {

  }

  function update () {

  }

  function destroy () {

  }

  return {
    init:init,
    all:all,
    get:get,
    create:create,
    update:update,
    destroy:destroy
  };
})();