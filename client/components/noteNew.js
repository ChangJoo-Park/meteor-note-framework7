Template.noteNew.events({
	'click .remove' : function(){
		console.log('test');
		Router.go('noteList');
	},
	'click .new' : function(e){
		var noteProperties = {
			title: $("#title").val(),
			description: $("#description").val()
		}
		Notes.insert(noteProperties);
		Router.go('noteList');
	}
});