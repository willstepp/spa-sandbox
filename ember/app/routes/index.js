App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  renderTemplate: function() {
    this.render('index');
  }
});
