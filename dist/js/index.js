var height = $(window).height();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll <= 100) {
    
    $(".Index-top__bottom").css({
      "left": "0"
    });
    
  }else if(scroll <= height - 150) {
    $(".Index-top__navigation").css({
      "background-color": "transparent",
      "box-shadow": "none"
    });
    $(".Index-top__bottom").css({
      "left": "-100%"
    });
    $(".Index-top__navigation-list a").css("color", "#183446");
  }else if(scroll <= height + 770){
    $(".Index-top__navigation").css({
      "background-color": "#F37402",
      "box-shadow": "0px 1px 1px rgba(0, 0, 0, 0.6)"
    });

    $(".Index-top__navigation-list a").css("color", "#f4f4f4");
  }else if(scroll <= height + 1100) {
    $(".Index-top__navigation").css({
      "background-color": "#03275A",
    });
    $(".Index-top__navigation-list a").css("color", "#f4f4f4");
  }else if(scroll <= height + 1900) {
    $(".Index-top__navigation").css({
      "background-color": "#1A7DD7",
    });
    // $(".Index-top__navigation-list a").css("color", "#183446");
  }else if(scroll <= height + 3000) {
    $(".Index-top__navigation").css({
      "background-color": "#F2B809",
    });
  }
  
});