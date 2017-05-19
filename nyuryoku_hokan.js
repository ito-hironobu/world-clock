// github test コメント追加

function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10　){
        ret = "0" + num;
    }else{
        ret = num;
    }
    return ret;
}

function minUptoHour(minute){
    var ret = [];
    if(minute>=0 && minute<60){
        ret = [minute, 0];
    }else if(minute<0){
        ret = [minute+60, -1];
    }else{
        ret = [minute-60, 1];
    }
    return ret;
}
function hourUptoDay(hour){
    var ret = [];
    if(hour>=0 && hour<24){
        ret = [hour, 0];
    }else if(hour<0){
        ret = [hour+24, -1];
    }else{
        ret = [hour-24, 1];
    }
    return ret;
}
function showClock(timezone){
    // 時間取得
    var nowTime = new Date();
    var UTC_Hour;
    if(nowTime.getHours()-9 < 0){
        UTC_Hour = nowTime.getHours() -9 + 24;
    }else{
        UTC_Hour = nowTime.getHours() -9;
    }
    var UTC_Min = nowTime.getMinutes();
    var UTC_Sec = nowTime.getSeconds();

    var dif_hour = (timezone - timezone%100) / 100;
    var dif_min = timezone % 100;
    var min_and_uphour = minUptoHour(UTC_Min + dif_min);
    var hour_and_upday = hourUptoDay(UTC_Hour + dif_hour + min_and_uphour[1]);

    var Sec = set2fig(UTC_Sec);
    var Min = set2fig(min_and_uphour[0]);
    var Hour = set2fig(hour_and_upday[0]);

    return Hour + "時" + Min + "分" + Sec + "秒";
}
function worldClock(){
    var ary_idnum = [];
    var num=0;
    $.each($('.clock'), function(){
        var idstr = $(this).attr("id");
        var idnum = idstr.match(/-?[0-9]+\.?[0-9]*/g);
        ary_idnum[num] = Number(idnum);
        num++;
    });

    for(var i=0; i<num; i++){ // num == ary_idnum
        $('#clock' + ary_idnum[i]).text(showClock(ary_idnum[i]));
    }
}
setInterval('worldClock()', 1000);


var all_data = [
    [-1000,'ハワイ','アメリカ'],
    [-900,'アラスカ','アメリカ'],
    [-800,'バハカリフォルニア','アメリカ'],
    [-700,'チワワ','アメリカ'],
    [-700,'マサラトラン','アメリカ'],
    [-700,'アリゾナ','アメリカ'],
    [-600,'中央アメリカ','アメリカ'],
    [-600,'サスカチュワン','アメリカ'],
    [-600,'アダラハラ','アメリカ'],
    [-600,'メキシコシティ','アメリカ'],
    [-600,'モンテレー','アメリカ'],
    [-500,'ポゴタ','アメリカ'],
    [-500,'リマ','アメリカ'],
    [-430,'カラカス','アメリカ'],
    [-400,'アスンシオン','アメリカ'],
    [-400,'ジョージタウン','アメリカ'],
    [-400,'サンファン','アメリカ'],
    [-400,'クイアバ','アメリカ'],
    [-400,'サンチアゴ','アメリカ'],
    [-330,'ニューファンドランド','アメリカ'],
    [-300,'ブラジリア','アメリカ'],
    [-300,'グリーンランド','アメリカ'],
    [-300,'カイエンヌ','アメリカ'],
    [-300,'フォルタレザ','アメリカ'],
    [-300,'ブエノスアイレス','アメリカ'],
    [-300,'モンテビデオ','アメリカ'],
    [-100,'カーボベルデ諸島','カーボベルデ'],
    [-100,'アゾレス','ポルトガル'],
    [000,'カサブランカ','モロッコ'],
    [000,'モンロビア','リベリア'],
    [000,'レイキャビク','アイスランド'],
    [000,'ダブリン','アイルランド'],
    [000,'エジンバラ','イギリス'],
    [000,'リスボン','イギリス'],
    [000,'ロンドン','イギリス'],
    [100,'アムステルダム','オランダ'],
    [100,'ベルン','スイス'],
    [100,'ローマ','イタリア'],
    [100,'ストックホルム','スウェーデン'],
    [100,'ウィーン','オーストリア'],
    [100,'ブリュッセル','ベルギー'],
    [100,'コペンハーゲン','デンマーク'],
    [100,'マドリード','スペイン'],
    [100,'パリ','フランス'],
    [100,'西中央アフリカ','中央アフリカ'],
    [100,'ベオグラード','セルビア'],
    [100,'ブラチスラバ','スロバキア'],
    [100,'ブダペスト','ハンガリー'],
    [100,'リュブリャナ','スロベニア'],
    [100,'プラハ','チェコ'],
    [100,'サラエボ','ボスニア・ヘルツェゴビナ'],
    [100,'スコピエ','マケドニア'],
    [100,'ワルシャワ','ポーアンド'],
    [100,'ザグレブ','クロアチア'],
    [100,'ウィントフック','ナミビア'],
    [200,'アテネ','ギリシャ'],
    [200,'ブカレスト','ルーマニア'],
    [200,'イスタンブール','トルコ'],
    [200,'ヘルシンキ','フィンランド'],
    [200,'ビリニュス','リトアニア'],
    [200,'カイロ','エジプト'],
    [200,'ダマスカス','シリア'],
    [200,'アンマン','ヨルダン'],
    [200,'ハラーレ','ジンバブエ'],
    [200,'エルサレム','イスラエル'],
    [300,'バグダッド','イラク'],
    [300,'ミンスク','ベラルーシ'],
    [300,'クエート','クエート'],
    [300,'リヤド','サウジアラビア'],
    [300,'ナイロビ','ケニア'],
    [330,'テヘラン','イラン'],
    [400,'モスクワ','ロシア'],
    [400,'サンクトペテルブルグ','ロシア'],
    [400,'ボルゴグラード','ロシア'],
    [400,'トビリシ','ジョージア'],
    [400,'エレバン','アルメニア'],
    [400,'アブダビ','アラブ首長国連邦'],
    [400,'マスカット','オマーン'],
    [400,'バクー','アゼルバイジャン'],
    [430,'カブール','アフガニスタン'],
    [500,'タシケント','ウズベキスタン'],
    [500,'イスラマバード','パキスタン'],
    [500,'カラチ','パキスタン'],
    [530,'スリジャワワルダナプラコッテ','スリランカ'],
    [530,'コルカタ','インド'],
    [530,'ニューデリー','インド'],
    [545,'カトマンズ','ネパール'],
    [600,'アスタナ','カザフスタン'],
    [630,'ヤンゴン(ラングーン)','ミャンマー'],
    [700,'バンコク','タイ'],
    [700,'ノヴォシビルスク','ロシア'],
    [800,'クラスノヤルスク','ロシア'],
    [800,'ウランバートル','モンゴル'],
    [800,'北京','中華人民共和国'],
    [800,'重慶','中華人民共和国'],
    [800,'シンガポール','シンガポール'],
    [800,'台北','台湾'],
    [900,'イルクーツク','ロシア'],
    [900,'ソウル','韓国'],
    [900,'大阪','日本'],
    [900,'札幌','日本'],
    [900,'東京','日本'],
    [930,'ダーウィン','オーストラリア'],
    [930,'アデレード','オーストラリア'],
    [1000,'ホバート','オーストラリア'],
    [1000,'ヤクーツク','オーストラリア'],
    [1000,'ブリスベン','オーストラリア'],
    [1000,'グアム','アメリカ'],
    [1000,'ポートモレスビー','パプアニューギニア'],
    [1000,'キャンベラ','オーストラリア'],
    [1000,'メルボルン','オーストラリア'],
    [1000,'シドニー','オーストラリア'],
    [1100,'ウラジオストク','ロシア'],
    [1100,'ソロモン諸島','イギリス'],
    [1100,'ニューカレドニア','フランス'],
    [1200,'フィジー','イギリス'],
    [1200,'マーシャル諸島','マーシャル諸島'],
    [1200,'マガダン','ロシア'],
    [1200,'オークランド','ニュージーランド'],
    [1200,'ウェリントン','ニュージーランド'],
    [1300,'ヌクアロファ','トンガ'],
    [1300,'サモア','サモア']
];
$(function(){
    var data=[];
    for(var i=0; i<all_data.length; i++){
        data[i] = all_data[i][1];
    }

    $('#city_name').autocomplete({
        source: data
    });
});

// 入力した都市名が存在するかチェック。あるなら(all_dataの行番号+1)を返す
function checkExistCity(city){
    var result;
    for(var i=0; i<all_data.length; i++){
        if(city==all_data[i][1]){
            result = i + 1;
            break;
        }
    }
    return result;
}
// 入力した都市名の該当するタイムゾーンパネルがすでにあるかチェック。あるならUTCとの時差を返す。
function checkExistPanel(result_city_row){
    var timezone = all_data[result_city_row][0];
    var result;
    // パネルを探す処理
    if($('#panel' + timezone).length){
        //alert('Exist');
        result = true;
    }else{
        //alert('nonExist');
        result = false;
    }
    return result;
}

// 入力された都市名と同一の年がすでに登録されていないかチェック。
function checkExistSameCity(result_city_row){
    var result;
    if($('#' + all_data[result_city_row][1]).length){
        result = true;
        //alert('同名の都市がすでに存在します');
    }else{
        result = false;
        //alert('同名の都市はありません');
    }
    return result;
}

// 追加関数
function addCity(){
    if($('.timezone').length < 10){ // 登録している都市数が１０未満ならば追加処理を行う
        var city_name = $('#city_name').val();
        // 入力された都市の存在チェック
        var result_city = checkExistCity(city_name);
        if(result_city){ // 入力された都市が存在すれば追加処理、なければスルー
            var result_city_row = result_city - 1; // 該当都市の行番号
            var timezone_num = all_data[result_city_row][0];
            var city = all_data[result_city_row][1];
            var country = all_data[result_city_row][2];
            /////////////////////////////////////
            $.cookie(city, city, {expires: 7});
            //alert('Cookie登録！');
            /////////////////////////////////////
            // 入力された都市のタイムゾーンがパネルにすでにあるかチェック
            var result_timezone_panel = checkExistPanel(result_city_row); // true / false
            if(result_timezone_panel){
                // すでにパネルがあるなら同一都市名の有無のチェック。
                var result_same_city = checkExistSameCity(result_city_row);
                if(!result_same_city){ // 同一の都市がなければパネルの中に追加
                    $('<div class="timezone"></div>')
                        .appendTo('#panel' + timezone_num)
                        .append('<div class="city" id=' + city + '>' + city +'</div>')
                        .append('<div class="country" id=' + country + '>' + country + '</div>')
                        .append('<div class="mask"><div class="caption"><input type="button" value="削除" class="del"></div></div>');
                }
            }else{
                // 同じタイムゾーンパネルがないなら新しくパネルを作成
                var ary_idnum = [];
                var num=0;
                var set_num;
                $.each($('.panel'), function(){
                    var idstr = $(this).attr("id");
                    var idnum = idstr.match(/-?[0-9]+\.?[0-9]*/g);
                    ary_idnum[num] = Number(idnum);
                    num++;
                });
                for(var i=0; i<num; i++){ // num == ary_idnum
                    if(timezone_num < ary_idnum[i]){
                        set_num = i;
                        break;
                    }
                    if(i==(num-1)){
                        set_num = num;
                    }
                }
                if(set_num != num){
                    $('.panel')
                        .eq(set_num)
                        .before('<div class="panel" id="panel' + timezone_num + '"></div>');
                }else{
                    $('#panelbox')
                        .append('<div class="panel" id="panel' + timezone_num + '"></div>');
                }
                $('<div class="clock" id="clock' + timezone_num + '"></div>')
                    .appendTo('#panel' + timezone_num);
                $('<div class="timezone"></div>')
                    .appendTo('#panel' + timezone_num)
                    .append('<div class="city" id=' + city + '>' + city +'</div>')
                    .append('<div class="country" id=' + country + '>' + country + '</div>')
                    .append('<div class="mask"><div class="caption"><input type="button" value="削除" class="del"></div></div>');
            }
        }
    }
}

// 追加処理 //////////////////////////////////////////////////
$(function(){
    // 追加ボタン　　　クリック時の追加
    $('#add').click(function(){
        addCity();
    });

    // エンター押下時の追加
    $('#city_name').keypress(function(e){
        if(e.which==13){
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
        if(num_timezone==1){ // ラスト要素でかつ
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

// Cookie処理 ////////////////////////
function cookieShow(){
    if($.cookie()){
        for(var key in $.cookie()){
            if(key=='num'){ continue; }
            // 入力された都市の存在チェック
            var result_city = checkExistCity($.cookie(key));
            var result_city_row = result_city - 1; // 該当都市の行番号
            var timezone_num = all_data[result_city_row][0];
            var city = all_data[result_city_row][1];
            var country = all_data[result_city_row][2];

            // 入力された都市のタイムゾーンがパネルにすでにあるかチェック
            var result_timezone_panel = checkExistPanel(result_city_row); // true / false
            if(result_timezone_panel){
                // すでにパネルがあるなら同一都市名の有無のチェック。
                var result_same_city = checkExistSameCity(result_city_row);
                if(!result_same_city){ // 同一の都市がなければパネルの中に追加
                    $('<div class="timezone"></div>')
                        .appendTo('#panel' + timezone_num)
                        .append('<div class="city" id=' + city + '>' + city +'</div>')
                        .append('<div class="country" id=' + country + '>' + country + '</div>')
                        .append('<div class="mask"><div class="caption"><input type="button" value="削除" class="del"></div></div>');
                }
            }else{ // 同じタイムゾーンパネルがないなら新しくパネルを作成
                var ary_idnum = [];
                var num=0;
                var set_num;
                // パネルが存在するなら、それぞれのパネルのid(数字)を取り出して配列に格納
                if( $('.panel').length != 0 ){
                    $.each($('.panel'), function(){
                        var idstr = $(this).attr("id");
                        var idnum = idstr.match(/-?[0-9]+/g);
                        ary_idnum[num] = Number(idnum);
                        num++;
                    });
                    // タイムパネルを追加する場所を探索して、set_numに番号を入れる
                    for(var i=0; i<num; i++){ // num == ary_idnum
                        if(timezone_num < ary_idnum[i]){
                            set_num = i;
                            break;
                        }
                        if(i==(num-1)){
                            set_num = num;
                        }
                    }
                }else{ // パネルが存在しないなら、set_numに0を代入
                    set_num = num; // 0
                }

                // タイムパネルを追加する
                if(set_num != num){
                    $('.panel')
                        .eq(set_num)
                        .before('<div class="panel" id="panel' + timezone_num + '"></div>');
                }else{
                    $('#panelbox')
                        .append('<div class="panel" id="panel' + timezone_num + '"></div>');
                }
                $('<div class="clock" id="clock' + timezone_num + '"></div>')
                    .appendTo('#panel' + timezone_num);
                $('<div class="timezone"></div>')
                    .appendTo('#panel' + timezone_num)
                    .append('<div class="city" id=' + city + '>' + city +'</div>')
                    .append('<div class="country" id=' + country + '>' + country + '</div>')
                    .append('<div class="mask"><div class="caption"><input type="button" value="削除" class="del"></div></div>');
            }
        }
    }
}

$(function(){
    // 初回ブラウザ訪問時、$.cookie('num')に1を設定
    if(!$.cookie('num')){
        $.cookie('num', 1, {expires: 7});
    }else{ // すでに$.cookie('num')があるならカウントアップ
        var num = $.cookie('num');
        num++;
        $.removeCookie('num');
        $.cookie('num', num, {expires: 7});
    }
    if($.cookie('num')==1){
        $.cookie("東京", "東京", {expires: 7});
    }
    //alert($.cookie('num'));
    cookieShow();
});
