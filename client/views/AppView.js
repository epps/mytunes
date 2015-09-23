// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    // instantiate a view for the songQueue collection
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    var context = this;
    //var contextualSongQueue = this.model.get('songQueue');
    this.playerView.$el.on('ended', function() {
      console.log("I am finished!");
      context.model.get('songQueue').shift();
      context.playerView.setSong(context.model.get('songQueue').at(0));
      //THIS IS WHERE WE ENDED
    });
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      // add newly instantiated songQueueView to AppView's render method
      this.songQueueView.$el
    ]);
  }

});
