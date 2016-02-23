
$( document ).ready(function(){
  console.log('hello');

  $('a').hover(function(){
    console.log('working?');
    $('.navlist').stop(true,true).slideDown();

    $('.navlist').hover(function () {
        navlist.stop(true, true).slideUp(400);

    // $('.navlist').slideUp();
  })



})
