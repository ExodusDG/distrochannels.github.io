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
$(document).ready(function() {
    var w = $(window).width();
    if (w > 415) {
        return false;
    } else {
        $('.buy-info-nb').attr('style', 'display: none;');
    }
});
$(document).ready(function() {
    var w = $(window).width();
    if (w > 768) {
        menu_top = $('.navbar').offset().top; // запоминаем положение меню
        $(window).scroll(function() { // отслеживаем событие прокрутки страницы
            if ($(window).scrollTop() > menu_top) { // если прокрутка дошла до меню
                if ($('.navbar').css('position') != 'fixed') { // проверяем, если меню еще не зафиксировано
                    $('navbar').addClass('fixed-menu') //добавляем элементу fixed-menu menu класс navbar
                    $('.navbar').css('position', 'fixed'); // задаем блоку меню свойство position = fixed
                    $('.navbar').css('top', '0'); // положение в самом верху
                    $('.navbar').css('right', '0.1vw'); // положение в самом верху
                    $('.header-body').css('margin-top', '80px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
                }
            } else { // прокрутка страницы обратно вверх достигла место "перехода" меню
                if ($('.navbar').css('position') == 'fixed') { // если меню зафиксировано
                    $('.navbar').css('position', '');
                    $('.navbar').css('top', '');
                    $('.navbar').css('right', '6.8vw'); // положение в самом верху
                    $('.header-body').css('margin-top', '');
                }
            }
        });
    }
});