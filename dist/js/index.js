var height = $(window).height();
var about_images = $(".About__images");

$(about_images).on("inview", function() {
  setTimeout($(about_images).css({
    "opacity": 1
  }), 1000)
})

$(".Index-top__content").ready(setTimeout(function() {
  $(".Index-top__content").css("opacity", 1)
}, 1000))

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  
  if($(".Index-top__logo").is(":hidden")) {
    // $(".Index-top__logo")).css("opacity", "1")
    console.log("aaa")
  }else{
    console.log("bbb")
  }
  
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
  }else if(scroll <= height + 650){
    $(".Index-top__navigation").css({
      "background-color": "#F37402",
      "box-shadow": "0px 1px 1px rgba(0, 0, 0, 0.6)"
    });

    $(".Index-top__navigation-list a").css("color", "#f4f4f4");
  }else if(scroll <= height + 950) {
    $(".Index-top__navigation").css({
      "background-color": "#03275A",
    });
    $(".Index-top__navigation-list a").css("color", "#f4f4f4");
  }else if(scroll <= height + 1900) {
    $(".Index-top__navigation").css({
      "background-color": "#F2B809",
    });
    // $(".Index-top__navigation-list a").css("color", "#183446");
  }else if(scroll <= height + 2700) {
    $(".Index-top__navigation").css({
      "background-color": "#1A7DD7",
    });
  }
  
});