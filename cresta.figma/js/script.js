$(function(){
  var headerHight = 100;
  $('a[href^="#"]').click(function() {
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

$(function() {
  $('.nav-btn, .nav-list li a').on('click', function() {
    $('header').toggleClass('active');
    $('.nav-list li a').toggleClass('active');
    $('body').toggleClass('lock');
  });
});