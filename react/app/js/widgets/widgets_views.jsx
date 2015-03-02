var spa = spa || {};
spa.widgets = spa.widgets || {};

spa.widgets.views = (function () {

  var views = {
    index: function (options) {
      React.render(
        <WidgetIndex />,
        document.getElementById(options.el)
      );
    }
  }

  function render (name, options) {
    views[name](options);
  }

  return {
    render: render
  };
})();