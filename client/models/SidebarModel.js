var SidebarModel = Backbone.Model.extend({

  initialize: function(){

  },

  changeView: function(){
    this.trigger('viewchange', this); 
    console.log('changeView triggered'); 
  }

});