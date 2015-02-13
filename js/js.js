$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header-two');
        } else {
            $('header').removeClass('header-two');
        }

    });
});