(function ($, undefined){

  var portHeight;

  var updatePortHeight = function(){
    portHeight = $(window).height();
    $(".portView").css({height: portHeight});
  }

  var initResizeDetection = function(){
    $(window).resize(function(){
      updatePortHeight();
    });
    $(window).resize();
  }

  var landingAnimation = function(){
    if($(window).scrollTop() >= 0 && $(window).scrollTop() < portHeight){
      $("body").animate({scrollTop:0}, 1000);
      $(".Titlerow").animate({opacity: 1.0}, 1500);
      $(".bamboo_left").animate({opacity:1.0, left:0}, 1500);
      $(".bamboo_right").animate({opacity:1.0, right:0}, {
        duration: 1500, 
        complete: function(){
          $(".logo").animate({opacity:1.0},{duration: 1000,complete: function(){
            $("body").css({overflow: "scroll"});
          }});
        }});
    }else{
      $("body").css({overflow: "scroll"});
    }
  }

  var enableNavBarListener = function(){
    console.debug("enabling navbar listener at top>"+$(window).scrollTop());
    $(window).scroll(function(){
      if($(window).scrollTop() >= ($("#landing").height() * 0.80)){
        $(".navbar").fadeIn(500);
      }else{
        $(".navbar").fadeOut(500);
      }
    });
  }
 
  
  var prepareScrollForLanding = function(){
    
  }

  var toCero = function(h1,h2,easing){
    easing = easing || 1;
    return (1.0 - fromCero(h1,h2,easing));
  }

  var fromCero = function(h1,h2,easing){
    easing = easing || 1;
    return (h1 / (h2/easing));
  }
  
  var fadingOnScroll = function(el, elParent, mode, easing){
    var func = mode === "in" ? fromCero : toCero;
    var elTop = elParent ? $(elParent).offset().top : $(el).offset().top;
    $(window).scroll(function(e){
      if($(window).scrollTop() >= elTop){
        var opa = func($(window).scrollTop(), $(el).height(), easing);
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
    fadingOnScroll(".item","#landing","out");
    fadingOnScroll(".logo","#landing","out",7);
    fadingOnScroll(".titlerow","#landing","out");
    animateOnScroll(-425, "left", ".bamboo_left", ".landing",2);
    animateOnScroll(-425, "right", ".bamboo_right", ".landing",2);
    animateOnScroll(portHeight*-1, "bottom", ".logo", ".landing",2);
    setTimeout(landingAnimation, 1000);
    enableNavBarListener(); 
  }

  $(document).ready(initialize);
})(jQuery);
