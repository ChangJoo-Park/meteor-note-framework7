Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('noteList', {
    path: '/',
    onAfterAction: function(){
      Session.set("isArchive", false);
    }
  });

  this.route('noteNew',{
  	path: '/notes/new'
  });

  this.route('notePage', {
  	path: '/notes/:_id',
  	data: function() { return Notes.findOne(this.params._id);}
  });

  this.route('noteMark',{
    path: 'notes/mark/:_id',
    data: function() { return Notes.findOne(this.params._id);}
  });

  this.route('aboutMe',{
    path: 'about'
  });
});
