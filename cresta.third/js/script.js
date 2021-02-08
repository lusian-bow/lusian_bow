// ハンバーガーメニュー //

$(function() {
  $('.nav-btn, .nav-list li a').on('click', function (){
    $('body').toggleClass('open');
    $('.nav-list li a').toggleClass('open');
  });
});

$(function() {
  $('.nav-btn').on('click', function () {
    $('.btn-bar').removeClass('black');
  });
});


// スムーススクロール //

$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// header 文字色変化 //

$(function() {
  var imgHeight = $('.fv-wrapper, .about-fv, .contact-fv').outerHeight();
  var bgHeight = $('.fv, .about-head, .contact-head').outerHeight();

  $(window).on('load scroll', function () {
    if($(window).scrollTop() < imgHeight) {
      $('.site-logo').removeClass('black');
    }else {
      $('.site-logo').addClass('black');
    }

    if($(window).scrollTop() < bgHeight) {
      $('.btn-bar').removeClass('black');
    }else {
      $('.btn-bar').addClass('black');
    }
  });
});
