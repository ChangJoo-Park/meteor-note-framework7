if(Meteor.isClient){
  Meteor.startup(function(){
    console.log("StartUP");
    Session.set("isArchive", false);
  });
}
