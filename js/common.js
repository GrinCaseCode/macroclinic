$(document).ready(function() {
$(".btn-main_map").click(function(event) {
		event.preventDefault();
		$(".modal-map").fadeOut(0);
		var selectMap = $(this).attr("href");
		$(selectMap).fadeIn(200);
		$(".main-map").addClass("active");

	});
$("#map").on( "click", function () { 
$(".btn-main_map").click(function(event) {
		event.preventDefault();
		$(".modal-map").fadeOut(0);
		var selectMap = $(this).attr("href");
		$(selectMap).fadeIn(200);
		$(".main-map").addClass("active");

		 var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
	});
 });


{
 if ($(window).width() > 992) { 
 $(document).mouseup(function (e){ 
	var div = $(".modal-map"); 
	if (!div.is(e.target) 
		&& div.has(e.target).length === 0) { 
		div.fadeOut(200); 
	$(".main-map").removeClass("active");
}
});
 }
}


});

