$(document).ready(function(){
	$("#nav_popup").click(function(){
		$("#drop_down").slideToggle();		
		$("#nav_popup").toggleClass("current_page");
		$("#resources").removeClass("current_page");		
		$("#about").removeClass("current_page");		
	});		
});