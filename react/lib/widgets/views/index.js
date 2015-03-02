var Index = React.createClass({displayName: "Index",
  render: function() {
    return (
      React.createElement("div", {className: "index"}, 
        "Hello, world! I am Index."
      )
    );
  }
});

var spa = spa || {};
spa.widgets = spa.widgets || {};

spa.widgets.views = (function () {

  var views = {
    index: function (el) {
      React.render(
        React.createElement(Index, null),
        document.getElementById(el)
      );
    }
  }

  function render (name, el) {
    views[name](el);
  }

  return {
    render: render
  };
})();