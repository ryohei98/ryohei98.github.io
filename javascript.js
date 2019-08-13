$(function(){
  $('.menu-icon').click(function(){
      if($('.mobile-menu').hasClass('open')){
      $('.mobile-menu').removeClass('open');
      $('.mobile-menu').slideUp();
    }else{
      $('.mobile-menu').addClass('open');
      $('.mobile-menu').slideDown();
      $('.mobile-menu').css('display','block');
      $('mobile-menu').css('height','60px');
    }
  });

  $('mobile-menu').click(function(){
    $('mobile-menu').slideUp();
  })

  $('.clips-btn').click(function(){
    $(this).next('div').slideToggle();
  });

  $('.slider').slick({

  });
});
