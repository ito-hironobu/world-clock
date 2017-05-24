// 都市パネル追加関数 ///////////////////////////////////////////
function addCitypanel(){
    if($('.timezone').length < 10){ // 登録している都市数が１０未満ならば追加処理を行う
        var city_name = $('#city_name').val(); // 入力テキスト取得

        // 入力された都市が存在するのかチェック
        var result_city = checkExistCity(city_name);
        if(result_city){ // 入力された都市が存在すれば追加処理、なければスルー
            var result_city_row = result_city - 1; // 該当都市の行番号
            // 入力と同一の都市がすでに登録されていないかチェック。
            var result_same_city = checkExistSameCity(result_city_row);
            if(!result_same_city){
                var timezone_num    = timezoneData[result_city_row][0];
                var city            = timezoneData[result_city_row][1];
                var country         = timezoneData[result_city_row][2];
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