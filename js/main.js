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
        $('.slider-img').attr('src', 'img/with-tooltip.png') //  -меняем атрибут src классу .класс
    });
    $('#demo-button-id-2').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-1.png') //  -меняем атрибут src классу .класс
    });
    $('#demo-button-id-3').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-4.png') //  -меняем атрибут src классу .класс
    });
    $('#demo-button-id-4').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-2.png') //  -меняем атрибут src классу .класс
    });
    $('#demo-button-id-5').click(function() {
        $('.slider-img').attr('src', 'img/with-tooltip-3.png') //  -меняем атрибут src классу .класс
    });
});