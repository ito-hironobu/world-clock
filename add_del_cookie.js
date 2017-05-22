// 追加処理 //////////////////////////////////////////////////
$(function(){
    // 追加ボタン　　　クリック時の追加
    $('#add').click(function(){
        addCity();
    });

    // エンター押下時の追加
    $('#city_name').keypress(function(e){
        if(e.which == 13){
            addCity();
        }
    });

    /*// オートコンプリート欄クリック時の追加
     $('//').on('//', function(){
     addCity();
     });
     */
});

// 削除処理 ////////////////////////////////////////////////
$(function(){
    $(document).on('click', '.del', function(){ // オーバーレイ表示の削除ボタンクリック時の削除
        var city_name = $(this).parents('.timezone').find('.city').attr("id");
        // パネルの要素がラスト１つかどうかをチェック
        var num_timezone = $(this).parents('.panel').find('.timezone').length;
        if(num_timezone == 1){ // ラスト要素でかつ
            if($('.panel').length != 1){ // ラストパネルでないなら
                $(this).parents('.panel').remove();
                $.removeCookie(city_name);////////////////////////
            } // else{} 最後のパネルならスルー
        }else{ // ラストのパネル要素じゃないなら都市だけ削除
            $(this).parents('.timezone').remove();
            $.removeCookie(city_name);
        }
    });
});

// Cookie処理 ////////////////////////////////////////////////
$(function(){
    var num = 1;
    // 初回ブラウザ訪問時、$.cookie('num')に1を設定
    if(!$.cookie('num')){
        $.cookie('num', 1, {expires: 7});
    }else{ // すでに$.cookie('num')があるならカウントアップ
        num = $.cookie('num');
        num++;
        $.removeCookie('num');
        $.cookie('num', num, {expires: 7});
    }
    if($.cookie('num') == 1){
        $.cookie("東京", "東京", {expires: 7});
    }
    restoreByCookie(); // Cookieを使って世界時計を復元
    alert($.cookie('num'));
});
