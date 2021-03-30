$(function(){
'use strict'
//finalcountdown js start
$('#getting_started2').countdown('2023/06/01', function (event) {
    $(this).html(event.strftime('%H '));
});
$('#getting_started3').countdown('2023/06/01', function (event) {
    $(this).html(event.strftime('%M '));
});
$('#getting_started4').countdown('2021/06/01', function (event) {
    $(this).html(event.strftime('%S '));
});


$('.steps_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
          


$(".tour_scroll").niceScroll({
    cursorcolor:"#3a0090",
    cursorwidth:"10px",
    cursorborder: "0px solid #3a0090",
    background: "black",
  });



  
  var navOff = $('.main_menu').offset().top;
    
  $(window).scroll(function(){

      var  scrolling = $(this).scrollTop();

      if(scrolling > navOff){
          $('.main_menu').addClass('menu_fix');
      }

      else{
          $('.main_menu').removeClass('menu_fix'); 
      }

  });


});