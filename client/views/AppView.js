var AppView = Backbone.View.extend({

  initialize: function(){
    this.SidebarView = new SidebarView({model: this.model.get('sidebardata')});
    this.LibraryView = new LibraryView({collection: this.model.get('library')}); 
    this.$el.append(this.SidebarView.render()); 
    this.$el.append(this.LibraryView.render())
    this.render(); 
    this.on('viewchange', function(){
      this.updateview(); 
    })

  },

  updateview: function(){
    console.log('updating view'); 
  },

  render: function(){

    return this.$el;

  }

});