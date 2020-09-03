$(document).ready(function() {

$("#map").on( "click", function () { 
$(".btn-main_map").click(function(event) {
		event.preventDefault();
		$(".modal-map").fadeOut(0);
		var selectMap = $(this).attr("href");
		$(selectMap).fadeIn(200);
		$(".main-map").addClass("active");
	});
 });


$(document).mouseup(function (e){ 
	var div = $(".modal-map"); 
	if (!div.is(e.target) 
		&& div.has(e.target).length === 0) { 
		div.fadeOut(200); 
	$(".main-map").removeClass("active");
}
});

});

