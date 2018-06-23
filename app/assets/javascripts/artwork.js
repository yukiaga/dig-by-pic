$(document).on('turbolinks:load', function(){

  var $main = $('.main');

  $main.masonry({
    itemSelector : '.box',
    columnWidth: 80,
    isAnimated: true,
    animationOptions: {
    duration: 800,
    easing: 'swing'
    }
  });

// infinitescrollのニューバージョンの場合
  // var msnry = $main.data('masonry');

  // $main.infiniteScroll( {
  //   path : ".next a",
  //   append : ".popup-modal",
  //   outlayer : msnry,
  //   scrollThreshold: 40,
  //   history : false
  // });

// infinitescrollの旧バージョンの場合(今のjsのファイルはこっち)
  // $main.imagesLoaded(function(){
  //   $main.masonry({
  //     itemSelector: '.box',
  //     });
  // });

  // $main.infinitescroll({
  //   navSelector: "nav.pagination",
  //   nextSelector: "nav.pagination a[rel=next]",
  //   itemSelector: ".box",
  //   loading: {
  //       finishedMsg: ' ',
  //       img: '',
  //   }
  // },
  // function( newElements ){
  //   var $newElem = $(newElements);
  //   $newElem.imagesLoaded(function(){
  //     $main.masonry('appended',$newElem,true);
  //   });
  // });

  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: true
  });
});


