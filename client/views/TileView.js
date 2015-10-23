var TileView = Backbone.View.extend({

  initialize: function(){
    this.$el.append('tile view son'); 
    this.render(); 
  },

  render: function(){
    return this.$el; 
  }

});
