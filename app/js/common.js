$(document).ready(function() {

    // traps plus
    $('.list__plus').click(function(){
        var listDescription = $(this).parent('.list__item');
        listDescription.toggleClass('itemActive').siblings().removeClass('itemActive');
    })
   

    // слайдер плюс     
    var cont = $('.slider__content-right');           
   $('.slider__plus').click(function(){
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

        sliderRight.removeClass('show');
        sliderLeft.removeClass('show');    
        
        if (nextSlide == 0) {
            sliderLeftOne.addClass('show');
            sliderRightOne.addClass('show');
            cont.removeClass('active');
        } else if (nextSlide == 1) {
            sliderLeftTwo.addClass('show');
            sliderRightTwo.addClass('show');
            cont.removeClass('active');
        } else if (nextSlide == 2) {
            sliderLeftThree.addClass('show');
            sliderRightThree.addClass('show');
            cont.removeClass('active');
        }
   });
});
