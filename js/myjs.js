(function ($, undefined){

  var portHeight;

  var updatePortHeight = function(){
    portHeight = $(window).height();
    console.debug("setting height to "+portHeight);
    $(".portView").css({height: portHeight});
  }

  var initResizeDetection = function(){
    $(window).resize(function(){
      console.debug("resize event detected");
      updatePortHeight();
    });
    $(window).resize();
  }

  var landingAnimation = function(){
    $(".titlerow").animate({opacity: 1.0}, 1500);
    $(".bamboo_left").animate({opacity:1.0, left:0}, 1500);
    $(".bamboo_right").animate({opacity:1.0, right:0}, {
      duration: 1500, 
      complete: function(){
        $(".logo").animate({opacity:1.0},{duration: 1000,complete: function(){
          $("body").css({overflow: "scroll"});
        }});
      }});
  }

  var prepareScrollForLanding = function(){
    
  }

  var fadingOnScroll = function(el, elParent, easing){
    easing = easing || 1;
    var elTop = elParent ? $(elParent).offset().top : $(el).offset().top;
    $(window).scroll(function(e){
      console.debug(el+" top= "+elTop);
      console.debug("window top= "+$(window).scrollTop());
      if($(window).scrollTop() >= elTop){
        var opa = (1.0 - ($(window).scrollTop() / ($(el).height()/easing)));
        console.debug(opa);
        $(el).css({opacity: opa});
      }
    });
  }

  var animateOnScroll = function(to, direction, el, elParent, easing){
    easing = easing || 1;
    var fel = elParent || el;
    $(window).scroll(function(e){
      var pos = (($(window).scrollTop() * to) / $(el).height()) * easing;
      $(el).css(direction, pos);
    });
  }

  var initialize = function(){
    console.debug("initializing");
    portHeight = $(window).height();
    initResizeDetection();
    landingAnimation();
    fadingOnScroll(".item","#landing");
    fadingOnScroll(".logo","#landing",7);
    fadingOnScroll(".titlerow","#landing");
    animateOnScroll(-425, "left", ".bamboo_left", ".landing",2);
    animateOnScroll(-425, "right", ".bamboo_right", ".landing",2);
    animateOnScroll(portHeight*-1, "bottom", ".logo", ".landing",2);

  }

  $(document).ready(initialize);
})(jQuery);
