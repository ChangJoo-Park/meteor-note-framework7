Template.titleBar.events({
	'click .openPanel' : function(){
		myApp.openPanel("left");
	},
	'click .openNewNote' : function(){
		Router.go('noteNew');
	}
});