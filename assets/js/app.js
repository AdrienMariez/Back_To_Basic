//quand je clique sur .departure, ça montre .right_departure
$(document).ready(function(){

	$('.departure').click(function() {
		$(".right_departure").hide();
	});
});