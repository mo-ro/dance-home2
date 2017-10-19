$(window).scroll(function() {
  if($(window).scrollTop() >= 200) {
    console.log($(window).scrollTop());
    
    $(".Index-top__navigation").css({
      "background-color": "#183446",
      "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.66)"
    });
  }else{
    $(".Index-top__navigation").css({
      "background-color": "transparent",
      "box-shadow": "none"
    });
  }
  
});