var AppModel = Backbone.Model.extend({

  initialize: function(params){

    this.set('library', new SongCollection()); 
    this.set('sidebardata', new SidebarModel()); 

    //ALSO WORKS!!!
    // this.get('sidebardata').on('viewchange', function(){
    //     console.log('in app model view change')
    // });

    this.listenTo(this.get('sidebardata'), 'viewchange', function(){
      console.log('in app model view change')
    });

  }


}); 
