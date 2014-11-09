Template.noteItem.events({
	'click .swipeout-delete': function() {
		var currentNoteId = this._id;
		Notes.remove(currentNoteId);
	},
  'click .swipeout-archive':function(){
    console.log('test');
    var currentNoteId = this._id;
    Notes.update(currentNoteId, {$set : {'isArchive': true }}, function(error){
      if(error){
        alert(error.reason);
      }else{
        Router.go('noteList');
      }
    });
  }
});
