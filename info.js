$(document).ready(function(){  //Код, включенный в $( document ).ready(), будет выполняться только тогда, когда объектная модель документа (DOM) страницы будет готова к выполнению кода JavaScript. Код, включенный в $( window ).on( "load", function() { ... }), запустится, как только будет готова вся страница (изображения или iframe), а не только DOM.
    $('.galery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});
