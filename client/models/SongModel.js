// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // play: function(){
  //   // Triggering an event here will also trigger the event on the collection
  //   this.trigger('play', this);
  // }

  addSongToQueue: function() {
    this.trigger('enqueue', this);
  },

  removeSongFromQueue: function() {
    console.log("This is the trigger event broadcasts");
    this.trigger('removeSong', this);
  }

});
