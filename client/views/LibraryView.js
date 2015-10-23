var LibraryView = Backbone.View.extend({

  initialize: function(){
    this.$el.append('library'); 
    this.render(); 
  },

  render: function(){
    return this.$el; 
  }

});