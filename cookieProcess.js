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
});

