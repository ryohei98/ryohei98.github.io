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
  }, );

  let $current = undefined;

  //menuを出す
  $('#wrapper-right').delay(2200).slideDown('slow');

  //aboutのクリック挙動
  $('#about-btn').click(function() {
    if ($(this).hasClass('current')) {

    } else if ($current === $('#archvies-btn')) {
      $(this).addClass('current');
      $('#archives-btn').removeClass('current');

      //aboutをリストから消しタイトルに、archivesをリストに追加
      $('#title-archives').fadeOut('slow');
      $('#title-about').fadeIn('slow');

      //content-aboutの出現
      $('#content-archives').fadeOut('slow');
      $('#content-about').fadeIn('slow');

      $current = $('#about-btn');
      console.log($current);

    } else {
      $(this).addClass('current');
      $('#archives-btn').removeClass('current');

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

      $('#title-archives').delay(1000).fadeOut('slow');
      $('#title-about').delay(1200).fadeIn('slow');

      //contentの出現
      $('#content-archives').delay(1000).fadeOut('slow');
      $('#content-about').delay(1300).fadeIn();
      $current = $('#about-btn');
      console.log($current);
    };
  });


  $('#archives-btn').click(function() {
    if ($(this).hasClass('current')) {

    } else if ($current === $('#about-btn')) {
      $(this).addClass('current');
      $('#archives-btn').removeClass('current');

      //archivesのバックグラウンドカラーを変更、archivesをリストに追加
      $(this).css('background-color', '#999');
      $('#title-archives').fadeIn('slow');
      $('#title-about').fadeOut('slow');

      //content-archivesの出現
      $('#content-about').fadeOut('slow');
      $('#content-archives').fadeIn('slow');
      $current = $('#archives-btn');
      console.log($current);

    } else {
      $(this).addClass('current');
      $('#about-btn').removeClass('current');

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
      $('#title-about').delay(1000).fadeOut('slow');
      $('#title-archives').delay(1200).fadeIn('slow');


      //contentの出現
      $('#content-about').delay(1000).fadeOut('slow');
      $('#content-archives').delay(1300).fadeIn();
      $current = $('#archives-btn');
      console.log($current);
    };
  });


});
