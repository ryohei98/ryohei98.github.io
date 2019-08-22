$(function() {

  //はじめのアニメーション
  $('#top').delay(400).fadeIn('slow');
  $('#inner').delay(400).fadeIn('slow');
  $('#top-name').delay(600).fadeIn('slow');
  $('#top-pf').delay(700).fadeIn('slow');

  //円を左側に移動する
  $('#top').delay(1000).animate({
    'marginLeft': '10vw'
  }, 1000);

  //背景を動かす
  setInterval(function() {
    $('#container').animate({
      'width': '120%'
    }, 30000).animate({
      'width': '100%'
    }, 30000);
  },);

  //menuを出す
  $('#wrapper-right').delay(2200).slideDown('slow');

  //aboutのクリック挙動
  $('#about-btn').click(function() {
    $(this).addClass('current');
    $('#about-btn:hover').css('text-decoration','none')
    $(this).css('position', 'absolute').css('cursor','default');

    //topの移動
    $('#top').delay(300).animate({
      'width': '10vw',
      'height': '10vw',
      'opacity': '1'
    }, 700);
    $('#inner').delay(300).animate({
      'top': '0.4vw',
      'width': '10vw'
    });
    $('#top-name').delay(300).animate({
      'fontSize': '2vw',
    }, 650);
    $('#top-pf').fadeOut('slow');

    //about-btnの移動

    $(this).delay(300).animate({
      'top': '10vw'
    }, 700).delay(300).animate({
      'left': '20vw'
    }, 700).delay(300).animate({
      'fontSize': '5vw',
      'fontWeight': 'normal'
    }, 700)

    //contentの出現

    $('#content-about').delay(300).fadeIn();
  })
});
