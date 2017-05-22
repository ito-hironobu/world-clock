// 入力した都市名が存在するかチェック。あるなら(all_dataの行番号+1)を返す
function checkExistCity(city){
    var result;
    for(var i = 0; i < all_data.length; i++){
        if(city == all_data[i][1]){
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
        result = true;
    }else{
        result = false;
    }
    return result;
}

// 入力された都市名と同一の年がすでに登録されていないかチェック。
function checkExistSameCity(result_city_row){
    var result;
    if($('#' + all_data[result_city_row][1]).length){
        result = true;
    }else{
        result = false;
    }
    return result;
}

// タイムゾーンに都市と国を追加
function addCityToPanel(timezone_num, city, country){
    $('<div class="timezone"></div>')
        .appendTo('#panel' + timezone_num)
        .append('<div class="city" id=' + city + '>' + city +'</div>')
        .append('<div class="country" id=' + country + '>' + country + '</div>')
        .append('<div class="mask"><div class="caption"><input type="button" value="削除" class="del"></div></div>');
}

// 受け取ったタイムゾーンのタイムパネルを追加
function createTimePanel(timezone_num){
    var ary_idnum = [];
    var num = 0;
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
        for(var i = 0; i < num; i++){ // num == ary_idnum
            if(timezone_num < ary_idnum[i]){
                set_num = i;
                break;
            }
            if(i == (num - 1)){
                set_num = num;
            }
        }
    }else{ // パネルが存在しないなら、set_numに0を代入
        set_num = num; // 0
    }

    // タイムパネルを追加する
    if(set_num != num){ // タイムパネルがすでにある and タイムパネル追加が右端じゃないなら
        $('.panel')
            .eq(set_num)
            .before('<div class="panel" id="panel' + timezone_num + '"></div>');
    }else{ // タイムパネルがない or タイムパネル追加が右端ならば
        $('#panelbox')
            .append('<div class="panel" id="panel' + timezone_num + '"></div>');
    }
    $('<div class="clock" id="clock' + timezone_num + '"></div>')
        .appendTo('#panel' + timezone_num);
}

// 追加関数 ///////////////////////////////////////////
function addCity(){
    if($('.timezone').length < 10){ // 登録している都市数が１０未満ならば追加処理を行う
        var city_name = $('#city_name').val(); // 入力テキスト取得

        // 入力された都市が存在するのかチェック
        var result_city = checkExistCity(city_name);
        if(result_city){ // 入力された都市が存在すれば追加処理、なければスルー
            var result_city_row = result_city - 1; // 該当都市の行番号
            // 入力と同一の都市がすでに登録されていないかチェック。
            var result_same_city = checkExistSameCity(result_city_row);
            if(!result_same_city){
                var timezone_num    = all_data[result_city_row][0];
                var city            = all_data[result_city_row][1];
                var country         = all_data[result_city_row][2];
                $.cookie(city, city, {expires: 7}); // Cookie追加

                if( checkExistPanel(result_city_row) ){ // 入力された都市のタイムゾーンパネルにすでにあるなら
                    // パネルの中に追加
                    addCityToPanel(timezone_num, city, country);
                }else{　// 入力された都市のタイムゾーンパネルにないなら
                    // パネルを作成し、中に都市を追加
                    createTimePanel(timezone_num);
                    addCityToPanel(timezone_num, city, country);
                }
            }
        }
    }
}

// Cookieを使って復元する処理 ////////////////////////
function restoreByCookie(){
    for(var key in $.cookie()){
        // $.cookie('num') はスルー
        if(key == 'num'){ continue; }

        // checkExistCity関数で、Cookieに登録された都市の行番号抽出
        var result_city_row = checkExistCity($.cookie(key)) - 1;
        var timezone_num    = all_data[result_city_row][0];
        var city            = all_data[result_city_row][1];
        var country         = all_data[result_city_row][2];

        if( checkExistPanel(result_city_row) ){ // 入力された都市のタイムゾーンパネルにすでにあるなら
            // パネルの中に追加
            addCityToPanel(timezone_num, city, country);
        }else{　// 入力された都市のタイムゾーンパネルにないなら
            // パネルを作成し、中に都市を追加
            createTimePanel(timezone_num);
            addCityToPanel(timezone_num, city, country);
        }
    }
}