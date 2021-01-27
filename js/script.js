$(function() {
  $('#nav-toggle').on('click',function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
});

$(function(){
  $('.sidebar-sp .main-nav ul li a').on('click',function(){
    $('.sidebar-sp').slideToggle();
    $('#nav-toggle').removeClass('active');
  });
});

$(function(){
  $('a[href^="#"]').click(function() {
      var headerHight = 100;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHight;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });
});