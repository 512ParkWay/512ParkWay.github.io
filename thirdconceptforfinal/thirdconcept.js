
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

//   $('.title').mouseleave(function()  {
//     $('.xotext').slideUp('medium');
// });

  $('.xo').hover(function() {
    $('.xolinks').slideDown();

  });

  $('.aid').hover(function(){
    $('body').css('background-image', 'url("./imagescopy/IMG_6227.jpeg")');
  });

  $('.eli').hover(function(){
    $('body').css('background-image', 'url("./imagescopy/IMG_5310.jpg")');
  });

  $('.john').hover(function(){
    $('body').css('background-image', 'url("./imagescopy/IMG_7210.jpg")');
  });

  $('.baby').hover(function(){
    $('body').css('background-image', 'url("./imagescopy/IMG_6866.jpg")');
  });

  $('.babygene').hover(function(){
    $('body').css('background-image', 'url("./imagescopy/IMG_1718.jpg")');
  });

})
