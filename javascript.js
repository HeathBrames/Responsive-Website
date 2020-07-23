//Toggle navbar to fade to blue when scrolling
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});


//Touch swipe functionality for mobile
$(".carousel").on("touchstart", function(event){
    var xClick = event.originalEvent.touches[0].pageX;
$(this).one("touchmove", function(event){
    var xMove = event.originalEvent.touches[0].pageX;
    if( Math.floor(xClick - xMove) > 5 ){
        $(this).carousel('next');
    }
    else if( Math.floor(xClick - xMove) < -5 ){
        $(this).carousel('prev');
    }
});
$(".carousel").on("touchend", function(){
        $(this).off("touchmove");
});
});