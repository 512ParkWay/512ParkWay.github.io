
$( document ).ready(function(){
  console.log('hello');

  $('.title').hover(function(){
    console.log('working?');
    $('.navlist').stop(true,true).slideDown();
    $('.xotext').slideDown();

  //   $('.homepagenav').mouseleave(function () {
  //     $('.navlist').slideUp('medium');
  //
  // });

  });

  $('.title').mouseleave(function()  {
    $('.xotext').slideUp('medium');
});

  $('.xo').hover(function() {
    $('.xolinks').slideDown();
    $('html').css('background-image', 'url("./imagescopy/IMG_7176.jpg")');

  });

  $('.aid').hover(function(){
    $('html').css('background-image', 'url("./imagescopy/IMG_6227.jpeg")');
    // $('html').animate({opacity: 0}, 0).css("background-image", "url('./imagescopy/IMG_6227.jpeg')").animate({opacity: 1}, 2500);
  });

  $('.eli').hover(function(){
    $('html').css('background-image', 'url("./imagescopy/IMG_5310.jpg")');
  });

  $('.john').hover(function(){
    $('html').css('background-image', 'url("./imagescopy/IMG_7210.jpg")');
  });

  $('.baby').hover(function(){
    $('html').css('background-image', 'url("./imagescopy/IMG_6866.jpg")');
  });

  $('.babygene').hover(function(){
    $('html').css('background-image', 'url("./imagescopy/IMG_1718.jpg")');
  });

})
