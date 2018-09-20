$(document).ready(function() {

    // слайдер плюс 
        
    var cont = $('.slider__content-right');           
   $('.plus').click(function(){
    cont.toggleClass('active');
    })
    
    // слайдер
   $('.slider').slick({

   });

   $('.slider__right').on('click', function(){
       $('.slider').slick('slickNext');
       cont.removeClass('active'); 
   })
   $('.slider__left').on('click', function(){
       $('.slider').slick('slickPrev');
       cont.removeClass('active');
   })
   $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var sliderRightOne = $('.slider__right_one'),
            sliderRightTwo = $('.slider__right_two'),
            sliderRightThree = $('.slider__right_three'),
            sliderLeftOne = $('.slider__left_one'),
            sliderLeftTwo = $('.slider__left_two'),
            sliderLeftThree = $('.slider__left_three'),
            sliderRight = $('.slider__right'),
            sliderLeft = $('.slider__left');
            console.log(nextSlide);
        sliderRight.removeClass('show');
        sliderLeft.removeClass('show');    
        if (nextSlide == 0) {
            sliderLeftOne.addClass('show');
            sliderRightOne.addClass('show');
        } else if (nextSlide == 1) {
            sliderLeftTwo.addClass('show');
            sliderRightTwo.addClass('show');
        } else if (nextSlide == 2) {
            sliderLeftThree.addClass('show');
            sliderRightThree.addClass('show');
        }
   });
});
