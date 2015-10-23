var AppModel = Backbone.Model.extend({

  initialize: function(params){

    this.set('library', new SongCollection()); 
    this.set('sidebardata', new SidebarModel()); 

    this.on('viewchange', function(){
      console.log('in app model view change')
    })

    // params.sidebar.on('viewchange', function(){
    //   console.log('in app model view change')
    // })

  }


}); 