
$(document).ready(function(){
$("nav ul li:first-child").click(function(){
<<<<<<< HEAD
	console.log('hamburger clicked');
$("nav ul li:first-child").click(function(event){
   event.preventDefault();
   	console.log('default prevented')
   	});




	$("nav").toggleClass("show");
	console.log("navigation opened");

=======
	console.log("hamburger clicked")
	//very cool slide toggle function, doesn't work in
	//all browsers
	$("nav ul li:not(:first-child)").slideToggle();
	//cool sliding toggle that directly targets the class
	//of the navigation in the mobile css
	// $("nav").toggleClass("show");
	// console.log("navigation opened")

    //the below script is for crazy egg heatmap tracking
            // setTimeout(function(){var a=document.createElement("script");
            // var b=document.getElementsByTagName("script")[0];
            // a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0018/1714.js?"+Math.floor(new Date().getTime()/3600000);
            // a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
            //     console.log("crazy egg installed");
    // end crazy egg heatmap tracking
// })
  


});

});




