$(document).on('turbolinks:load', function(){

  var $main = $('.main');

  $main.masonry({
    itemSelector : '.box',
    columnWidth: 50,
    isAnimated: true,
    animationOptions: {
    duration: 800,
    easing: 'swing'
    }
  });

  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: true
  });
});


