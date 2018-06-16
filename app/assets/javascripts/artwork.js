$(document).on('turbolinks:load', function(){
  var $main = $('.main');

  $main.masonry({
    itemSelector : '.box',
    isAnimated: true,
    animationOptions: {
    duration: 800,
    easing: 'swing'
    }
  });

// infinitescrollのニューバージョンの場合
  var msnry = $main.data('masonry');

  $main.infiniteScroll( {
    path : ".next a",
    append : ".popup-modal",
    outlayer : msnry,
    scrollThreshold: 40,
    history : false
  });

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
  // ポップアップ画面の実装
  $(document).on('click', '.box', function (e) {
　// 画像の表示
    var $preview = $('#inline-wrap').find('.popup__image');
    var image = e.target.src;
    $preview.empty();
    $preview.append($('<img>').attr({
      src: image,
      class: "popup__image",
      alt: "image"
    }));
　// タイトルの表示
    var $title_show = $('#inline-wrap').find('.popup__title');
    var artwork_title = $(this).data('artwork-title');
    $title_show.empty();
    $title_show.append(`<p>Album title : ${artwork_title}</p>`)
　// アーティストの表示
    var $artist_show = $('#inline-wrap').find('.popup__artist');
    var artwork_artist = $(this).data('artwork-artist');
    $artist_show.empty();
    $artist_show.append(`<p>Artist name : ${artwork_artist}</p>`)
  // リンクの表示
    var $link_show = $('#inline-wrap').find('.popup__link');
    var artwork_link = $(this).data('artwork-link');
    $link_show.empty();
    $link_show.append(`<a href="${artwork_link} "target="spotify"><img src="assets/spotify.svg" alt="spotifylink" width="100%" height="100%"></a>`)
  });
  //閉じるリンクの設定
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

});

