$(document).on('turbolinks:load', function(){

  var $btn = $('.menu_btn');
  var $nav = $('.navbar');
  var $bgt = $('.background__tree2');
  var $img = $('.about__image--1');
  var $img__about = $('.about__1stcontent__right__image');
  var $img__about2 = $('.about__2ndcontent__right__image');

  var w = $(window).width(); //ブラウザの幅を取得
  var x = 720;　//ブレイクポイントを設定

  if (w <= x) { // ウィンドウサイズが768px以下

    $($btn).removeClass('none');
    $($nav).addClass('none');
    $($bgt).addClass('none');
    $($img).addClass('none');
    $($img__about).addClass('none');
    $($img__about2).addClass('none');

    } else { //ウィンドウサイズが768以上
      $($btn).addClass('none').text('Menu'); //非表示・文字をメニューにする
      $($nav).removeClass('none').removeAttr('style'); //表示・styleを初期化する
      $($bgt).removeClass('none').removeAttr('style'); //表示・styleを初期化する
      $($img).removeClass('none').removeAttr('style'); //表示・styleを初期化する
      $($img__about).removeClass('none').removeAttr('style'); //表示・styleを初期化する
      $($img__about2).removeClass('none').removeAttr('style'); //表示・styleを初期化する
  }


  /*
   * ブラウザのウィンドウ幅を取得してメニューボタンとナビゲーションの表示/非表示を切り替え
   */

  var timer = false;

  $(window).resize(function(){

    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {

      var w = $(window).width(); //ブラウザの幅を取得
      var x = 720;　//ブレイクポイントを設定

      if (w <= x) { // ウィンドウサイズが指定値px以下

        $($btn).removeClass('none');
        $($nav).addClass('none');
        $($bgt).addClass('none');
        $($img).addClass('none');
        $($img__about).addClass('none');
        $($img__about2).addClass('none');

      } else { //ウィンドウサイズが指定値以上
        $($btn).addClass('none').text('Menu'); //非表示・文字をメニューにする
        $($nav).removeClass('none').removeAttr('style'); //表示・styleを初期化する
        $($bgt).removeClass('none').removeAttr('style'); //表示・styleを初期化する
        $($img).removeClass('none').removeAttr('style'); //表示・styleを初期化する
        $($img__about).removeClass('none').removeAttr('style'); //表示・styleを初期化する
        $($img__about2).removeClass('none').removeAttr('style'); //表示・styleを初期化する

        var $menu_list = $('.menu_list');
        $($menu_list).addClass('none');
      }
    }, 200);
  })


  /*
   * クリックイベントによるスライドダウン/アップ
   */

  $($btn).on('click',(function(){

  var $menu_list = $('.menu_list');

    if ($($btn).text().trim()=='Menu'){
      $($menu_list).removeClass('none');
      $($btn).text('Close');
    } else {
      $($menu_list).addClass('none');
      $($btn).text('Menu');
    }

  }));

  var urlParam = location.pathname;

  // console.log(urlParam.match(/./).input);
  // →これでurlのパスの文字列のみ抜き出せる

  if (urlParam.match(/./).input == "/") {
// urlのパスの文字列が"/"だった場合のみ＝rootだった場合のみ

    $(function(){
      $('.header__icon--cover').on('mouseover', function(){
          $('.header__icon').addClass('none');
          $('.header__icon--reload').removeClass('none');
      })
    });

    $(function(){
      $('.header__icon--cover').on('mouseout', function(){
          $('.header__icon--reload').addClass('none');
          $('.header__icon').removeClass('none').removeAttr('style');
      });
    });

  }

});


