Template.noteNew.rendered = function(){
	var removedHeight =  $(".navbar-inner").height();
	removedHeight += $(".align-top").height();
	removedHeight += 60;
	var targetHeight = $(window).height() - removedHeight;
	$(".full-height").height(targetHeight);
	// title
	var title = new Date();
	$("#title").val(title);
}

Template.noteNew.created = function(){
	$(window).resize(function(){
		var removedHeight =  $(".navbar-inner").height();
		removedHeight += $(".align-top").height();
		removedHeight += 60;
		var targetHeight = $(window).height() - removedHeight;
		$(".full-height").height(targetHeight);
	});
}
