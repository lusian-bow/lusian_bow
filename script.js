$(window).on('load',function(){
  // ここから文字を<span></span>で囲む記述
  $('.typ').children().andSelf().contents().each(function() {
  if (this.nodeType == 3) {
  $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  }
  });
  // ここから一文字ずつフェードインさせる記述
  $('.typ').css({'opacity':1});
  for (var i = 0; i <= $('.typ').children().size(); i++) {
  $('.typ').children('span:eq('+i+')').delay(60*i).animate({'opacity':1},50);
  };
  });

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