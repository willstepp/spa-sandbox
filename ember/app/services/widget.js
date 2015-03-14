App.WidgetService = Ember.Object.extend({
  all: function () {
    return [
      {name:'First Widget', desc:'My first widget'}, 
      {name:'Second Widget', desc:'My second widget'}
    ];
  }
});