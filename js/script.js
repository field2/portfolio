$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('animated');
        $('.menu').toggleClass('appear');

    });
    $('.carousel').flickity({
        fullscreen: true,
        lazyLoad: 1
      });

});