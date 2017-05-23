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