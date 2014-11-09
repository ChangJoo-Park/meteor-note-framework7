Template.footer.helpers({
  routeIs: function(state){
    var current = Router.current().route.getName();
    return current === state;
  }
});

Template.footer.events({
  'click .isPage': function(){
    var currentNoteId = this._id;
    var noteProperties = {
      title: $("#title").val(),
      description: $("#description").val()
    }
    Notes.update(currentNoteId, {$set: noteProperties}, function(error){
      if(error){
        alert(error.reason);
      }else{
      }
    });
  },
  'click .isArchive': function(e){
    e.preventDefault();
    Session.set("isArchive", !Session.get("isArchive"));
  }
});
