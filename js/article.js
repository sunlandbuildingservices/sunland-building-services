
//need to create a function that works with the "a"'s  to show and hide them. 
$(document).ready(function() { 
	console.log("File has loaded");
 $("a").click(function(e){
 	e.preventDefault(); 
 	console.log("click happened and default prevented");
 //prevents the "jump" of the link click
  	});


//the below function is to open content that is obscured by the read more tags. 

$('.read-more').click(function(){
	$('#show-this-on-click').slideDown();
	$('.read-more').hide();
	$('.read-less').show();
});
	
});

$('.read-less').click(function(){
	console.log("read less button clicked");
	$('.read-less').hide();
	$('#show-this-on-click').slideUp(function(){
		$('.read-more').show();
	});
});


