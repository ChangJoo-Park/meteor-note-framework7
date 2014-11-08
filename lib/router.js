Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('noteList', {path: '/'});

  this.route('noteNew',{
  	path: '/notes/new'
  })

  this.route('notePage', {
  	path: '/notes/:_id',
  	data: function() { return Notes.findOne(this.params._id);}
  });
});
