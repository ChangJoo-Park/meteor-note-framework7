Template.notePage.events({
	'click .remove' : function(){
		var currentNoteId = this._id;
		Notes.remove(currentNoteId);
		Router.go('noteList');
	},
	'click .complete' : function(e){
		var currentNoteId = this._id;
		var noteProperties = {
			title: $("#title").val(),
			description: $("#description").val()
		}
		Notes.update(currentNoteId, {$set: noteProperties}, function(error){
			if(error){
				alert(error.reason);
			}else{
				Router.go('noteList');		
			}
		});
		
	}
});