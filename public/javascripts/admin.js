var slides = document.querySelectorAll('.slide'),
    cardBody = $('.card__body');

var setBodyHeight = function() {
    var activeSlide = $('.slide.active'),
    activeSlideHeight = activeSlide.find('.card__slide').outerHeight();
    console.log(activeSlideHeight);
        
    cardBody.css('min-height', activeSlideHeight + 'px');
};

var changeSlide = function(event) {
    event.preventDefault();
    var targetSlide = $(this).attr('href');

    // Add active classes for target
    $('.slide.active').removeClass('active');
    $(targetSlide).addClass('active');

    // Add active classes for nav
    $('.card__nav a').removeClass('active');
    $(targetSlide.replace('#','.')).addClass('active');

    // Reset body height
    setBodyHeight();
};

$(function() {

    // Set init height
    setBodyHeight();

    $('.js-toggle-slide').on('click', changeSlide);

});

