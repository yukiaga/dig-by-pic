$(document).on('ready page:change', function(){
  $('.main').masonry({
    itemSelector : '.box',
    isAnimated: true,
    animationOptions: {
    duration: 800,
    easing: 'swing'
    }
  });
});
