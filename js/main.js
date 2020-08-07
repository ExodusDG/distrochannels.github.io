$(document).ready(function() {
    $('.header-slider').slick({
        slidesToShow: 1,
    });
});
$(document).ready(function() {
    $('.demo-button').click(function() {
        $('.demo-button').removeClass('demo-button-active');
        $(this).toggleClass('demo-button-active');
    });
});
$(document).ready(function() {
    $('#demo-button-id-1').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip.png')
    });
    $('#demo-button-id-2').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-1.png')
    });
    $('#demo-button-id-3').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-4.png')
    });
    $('#demo-button-id-4').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-2.png')
    });
    $('#demo-button-id-5').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-3.png')
    });
});
$(document).ready(function() {

    var w = $(window).width();
    if (w > 415) {
        return false;
    } else {
        $('.slide').attr('style', 'margin-left: 8vw;');
    }

});