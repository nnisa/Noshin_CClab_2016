$(document).ready(function() {
	var x = document.getElementsByClassName("button")[0];
	console.log(x);

	$(x).hover(function() {
		$(this).css("background-color", "black");
						},
	function(){
		$(this).css("background-color", "green");
	});
});	
	



