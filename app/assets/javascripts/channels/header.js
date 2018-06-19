$(document).on('turbolinks:load', function(){

  var $btn = $('.menu_btn');
  var $nav = $('.navbar');

  var w = $(window).width(); //ブラウザの幅を取得
  var x = 720;　//ブレイクポイントを設定

  if (w <= x) { // ウィンドウサイズが768px以下

    $($btn).removeClass('none');
    $($nav).addClass('none');

    } else { //ウィンドウサイズが768以上
      $($btn).addClass('none').text('Menu'); //非表示・文字をメニューにする
      $($nav).removeClass('none').removeAttr('style'); //表示・styleを初期化する
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

      } else { //ウィンドウサイズが指定値以上
        $($btn).addClass('none').text('Menu'); //非表示・文字をメニューにする
        $($nav).removeClass('none').removeAttr('style'); //表示・styleを初期化する

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

});
