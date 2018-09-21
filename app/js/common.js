$(document).ready(function() {
    console.log( "ready!" );
});

$('.reviews-slider').slick({
	arrows: true,
	dots: false,
	infinite: true,
	slidesToShow: 3,
	centerMode: true,
	slidesToScroll: 3,
	variableWidth: true, 
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        slidesToScroll: 1
      }
    }
    ]
})

$(".plus").click(function(e){
	var block = $(this).parents(".slick-slide");
	block.toggleClass("active").siblings().removeClass("active");
})