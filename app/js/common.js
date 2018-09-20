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
        slidesToScroll: 2,
        centerMode: false,
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
})
