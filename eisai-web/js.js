$(function() {
  $('#menu-icon').click(function() {
    $('#mobile-menu').slideToggle();
    $('#menu-icon').fadeOut(300);
    $('#menu-close-icon').delay(300).fadeIn(300);
  });

  $('#menu-close-icon').click(function() {
    $('#mobile-menu').slideToggle();
    $('#menu-close-icon').fadeOut(300);
    $('#menu-icon').delay(300).fadeIn(300);
  });

  $('#practice-acordion').click(function(){
    $('#practice-list').slideToggle();
  })

  $('#mobile-practice-acordion').click(function(){
    $('#mobile-practice-list').slideToggle();
  })

  if ($('header').width() > 768) {

    let $win = $(window),
      $main = $('.container'),
      $nav = $('.side-bar'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

    $win.on('load scroll', function() {
        let value = $(this).scrollTop();
        if (value > navPos - 83) {
          $nav.addClass(fixedClass);
        } else {
          $nav.removeClass(fixedClass);
          $main.css('margin-top', '0');
        }
      });
    }

})
