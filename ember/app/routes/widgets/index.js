App.WidgetsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.widgetService.all();
  }
});
