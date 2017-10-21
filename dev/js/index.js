var height = $(window).height();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll <= 100) {
    $(".Index-top__navigation").css({
      "background-color": "transparent",
      "box-shadow": "none"
    });

  }else if(scroll <= 300) {
    $(".Index-top__bottom").css({
      "bottom": "0px"
    });
  }else if(scroll <= height + 520){
    $(".Index-top__navigation").css({
      "background-color": "#F37402",
      "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.66)"
    });
    $(".Index-top__bottom").css({
      "bottom": "-80px"
    });
    $(".Index-top__navigation-list a").css("color", "#183446")
  }else if(scroll <= height + 1200) {
    $(".Index-top__navigation").css({
      "background-color": "#03275A",
      "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.66)",
    });
    $(".Index-top__navigation-list a").css("color", "#f4f4f4");
  }
  
});