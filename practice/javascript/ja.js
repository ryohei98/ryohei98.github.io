$(function(){

$('title-name').fadeIn('slow');

  // 実行を遅らせる
  setTimeout(function(){
    // widthの値を取得
  const $width = $('.square1').width();
  $('.square2').animate({
    'marginRight':$width*1.3
  },4000);



  console.log($width);
},500);

});
