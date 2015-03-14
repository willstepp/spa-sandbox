var spa = spa || {};
spa.widgets = spa.widgets || {};

spa.widgets.views = (function () {

  var views = {
    layout:'',
    index: function (options) {
      React.render(
        <WidgetIndex />,
        document.getElementById(options.el)
      );
    }
  }

  function render (name, options) {
    //render layout here
    views[name](options);
  }

  return {
    render: render
  };
})();