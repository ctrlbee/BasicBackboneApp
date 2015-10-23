var SidebarView = Backbone.View.extend({

  className: 'sidebar', 

  initialize: function(){
    this.$el.append("sidebar link artist"); 
    this.render(); 
  },

  events: {
    'click': function(){

      this.model.changeView(); 
    }
  },

  render: function(){
    return this.$el; 
  }

});
