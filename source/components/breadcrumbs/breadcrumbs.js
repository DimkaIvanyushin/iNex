$(document).ready(function () {

    var $breadcrumbs = $('section.breadcrumbs')

    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
     
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $breadcrumbs.css('background-position-y',(0+(scrolled*.50))+'px');
    }
});
