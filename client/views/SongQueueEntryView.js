// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // set the tagname
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'click': function() {
  //     // this.model.play();
  //     // call an enqueue method on the song's model
  //     this.model.addSongToQueue();
  //   }
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
