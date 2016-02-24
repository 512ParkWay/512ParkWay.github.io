
$( document ).ready(function(){
  console.log('hello');

  $('.title').hover(function(){
    console.log('working?');
    $('.navlist').stop(true,true).slideDown();
    $('.xotext').slideDown();

    $('.homepagenav').mouseleave(function () {
      $('.navlist').slideUp('medium');

  });

  });

  $('.title').mouseleave(function()  {
    $('.xotext').slideUp('medium');
});

  $('.xo').hover(function() {
    $('.xolinks').toggle();

  });

  $('.aid').hover(function(){
    $('body').css('background-image', 'url("imagescopy/IMG_6227.jpeg")');
  });



})
