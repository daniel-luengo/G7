
$(function() {

  var scrolled = false;

  $('.celular').spritespin({
    source: SpriteSpin.sourceArray('images/frames/frame_{frame}.jpg', { frame: [1,16], digits: 3 }),
    width: 480,
    height: 327,
    sense: -1,
	  frameTime: 100,
    animate:false,
  });

  $(window).on('scroll', function(){
    if(scrolled == true) return;
    $('.celular').spritespin({animate:true})
    .animate({
      top: "+500",
    }, 1000, function() {
      $('.celular').spritespin({animate:false});
      scrolled = true;
    });
  });

});