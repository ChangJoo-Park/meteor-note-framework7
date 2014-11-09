Template.noteItem.events({
	'click .swipeout-delete': function() {
		var currentNoteId = this._id;
		Notes.remove(currentNoteId);
	},
  'click .swipeout-archive':function(){
    var currentNoteId = this._id;
    Notes.update(currentNoteId, {$set : {'isArchive': true }}, function(error){
      if(error){
        alert(error.reason);
      }else{
        Router.go('noteList');
      }
    });
  },
  'click .swipeout-unarchive':function(){
    var currentNoteId = this._id;
    Notes.update(currentNoteId, {$set : {'isArchive': false }}, function(error){
      if(error){
        alert(error.reason);
      }else{
        Router.go('noteList');
      }
    });
  }
});
