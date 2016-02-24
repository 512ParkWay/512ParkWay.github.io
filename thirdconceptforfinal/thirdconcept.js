
$( document ).ready(function(){
  console.log('hello');

  $('a').hover(function(){
    console.log('working?');
    $('.navlist').stop(true,true).slideDown();

    $('.homepagenav').mouseleave(function () {
    $('.navlist').slideUp('slow');

  });


  });
  $('.xo').hover(function(){
    $('.xolinks').toggle();


  });

  $('.aid').mouseover(function(){
    $('body').css('background-image', 'url ("imagescopy/IMG_6227.jpeg")');


  });



})
