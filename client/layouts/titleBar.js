Template.titleBar.events({
  'click .titleBar' : function(e){
    e.preventDefault();
    Session.set("isArchive", false);
    Router.go("noteList");
  },

  'click .openPanel' : function(){
		// myApp.openPanel("left");
	},

  'click .openNewNote' : function(e){
    e.preventDefault();
		Router.go('noteNew');
	},

  'click .saveNote' : function (e) {
    e.preventDefault();
    var noteProperties = {
      title: $("#title").val(),
      description: $("#description").val(),
      isArchive: false
    }
    Notes.insert(noteProperties);
    Session.set("isArchive", false);
    Router.go('noteList');
  },

  'click .updateNote' : function (e) {
    var currentNoteId = this._id;
    var noteProperties = {
      title: $("#title").val(),
      description: $("#description").val()
    }
    Notes.update(currentNoteId, {$set: noteProperties}, function(error){
      if(error){
        alert(error.reason);
      }else{
        Session.set("isArchive", false);
        Router.go('noteList');
      }
    });
  }
});

Template.titleBar.helpers({
  routeIs: function(state){
    var current = Router.current().route.getName();
    return current === state;
  }
});
