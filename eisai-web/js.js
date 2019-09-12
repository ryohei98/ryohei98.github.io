$(function(){
  $('#menu-icon').click(function(){
      $('#mobile-menu').slideToggle();
      $('#menu-icon').fadeOut(300);
      $('#menu-close-icon').delay(300).fadeIn(300);
    });

  $('#menu-close-icon').click(function(){
    $('#mobile-menu').slideToggle();
    $('#menu-close-icon').fadeOut(300);
    $('#menu-icon').delay(300).fadeIn(300);
  });
})
