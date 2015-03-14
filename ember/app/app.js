var App = Ember.Application.create({
  ready: function () {
    this.register('service:widget', App.WidgetService, {singleton:true});
    this.inject('controller', 'widgetService', 'service:widget');
    this.inject('route', 'widgetService', 'service:widget');
  }
});

App.Router.map(function() {
  this.resource('widgets', function() {
    this.route('new');
  });
});