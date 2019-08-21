$(function(){

  setTimeout(function(){
    $('title-name').fadeIn('slow');
  },3000);



    // widthの値を取得
    const $width = $('.square1').width();
    $('.square2').delay(3000).animate({
    'marginRight':$width*1.3
    // animate-duration
    },3000);
});
