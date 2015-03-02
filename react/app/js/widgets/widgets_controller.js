var spa = spa || {};
spa.widgets = spa.widgets || {};

spa.widgets.controller = (function () {

  function index_widgets () {
    spa.widgets.service.all(function (widgets) {
      console.log(widgets);
      spa.widgets.views.render('index', {widgets:widgets, el:spa.config.container});
    }, function (err) {
      console.log('there was a problem retrieving widgets');
      console.log(err);
    });
    
  }

  function show_widget () {

  }

  function new_widget () {

  }

  function edit_widget () {

  }

  return {
    index_widgets:index_widgets,
    show_widget:show_widget,
    new_widget:new_widget,
    edit_widget:edit_widget
  };
})();