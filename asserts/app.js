$(document).ready(function () {
    console.log('Готово!');
});


//   Fix навигации при скроле ниже уровня intro 
/*Fixed header*/
$(function () {
    var header = $("#header"),
        introH = $("#header").innerHeight(),
        scrolloffset = $(window).scrollTop();
    // scrolloffset - сколько проскролили страницу 
    checkScrool(scrolloffset);
    $(window).on("scroll", function () {
        scrolloffset = $(this).scrollTop();

        checkScrool(scrolloffset);
    });

    function checkScrool(scrolloffset) {
        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

});

/* Smooth scroll */

$("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;//Значение, где находится от топа нужный слайд
    $("#nav a").removeClass("active");
    $this.addClass("active");
    $("html, body").animate({
        scrollTop: blockOffset
    }, 700)
    console.log(blockOffset)
    // $(blockId)
});

// Menu nav toggle

$("#nav_toggle").on("click", function (event) {
    // Убираем предыдущие события кнопки (переход по ссылке и т.п.)
    event.preventDefault();
    $(this).toggleClass("active");
    $("nav").toggleClass("active");

});

// Скрол наверх

// Collapse
$("[data-collapse]").on("click", function (event) {
    // Получаем id ЭЛЕМЕНТА КОТОРЫЙ нужно раскрыть или скрыть
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('collapse');
    $this.toggleClass("active")
});

// Slider

$("[data-slider").slick({
    infinity: true,
    fade: false,
    slidesToShow: 1,
    slideToScroll: 1
});