var spa = spa || {};
spa.widgets = spa.widgets || {};

spa.widgets.service = (function () {

  var ajax = null;

  function init (ajaxModule) {
    ajax = ajaxModule;
  }

  function all (callback, errback) {
    ajax.send({
      type:'GET',
      url:'http://localhost:3000/widgets.json',
      success:function (widgets) {
        callback(widgets);
      },
      error:function (err) {
        errback(err);
      }
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