var $mainMenu = $('.main-menu');
var menuOffsetTop = $mainMenu.offset().top;
var check = false;

// $('.nav-item.dropdown').hover(
//     function () {
//         $(this).addClass("show");
       
//     }, function () {
//         $(this).removeClass("show");
//     }
// );


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > menuOffsetTop) {
        if (!check) {
            $mainMenu.addClass('fixed-top');

            $mainMenu.find('#navbarSupportedContent')
                .find('ul')
                .removeClass('hide')
                .addClass('show')
                .find('li.search')
                .removeClass('ml-auto');

            $mainMenu.find('.logo-dt')
                .removeClass('hide')
                .addClass('show')

            check = true;
        }
    } else {
        if (check) {
            $mainMenu.removeClass('fixed-top');

            $mainMenu.find('#navbarSupportedContent')
                .find('ul')
                .removeClass('show')
                .addClass('hide')
                .find('li.search')
                .addClass('ml-auto');

            $mainMenu.find('.logo-dt')
                .removeClass('show')
                .addClass('hide')

            check = false;
        }
    }
});