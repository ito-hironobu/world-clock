// 入力した都市名が存在するかチェック。あるなら(timezoneDataの行番号+1)を返す
function checkExistCity(city){
    var result;
    for(var i = 0; i < timezoneData.length; i++){
        if(city == timezoneData[i][1]){
            result = i + 1;
            break;
        }
    }
    return result;
}

// 入力された都市名と同一の都市がすでに登録されていないかチェック。
function checkExistSameCity(result_city_row){
    var result;
    if($('#' + timezoneData[result_city_row][1]).length){
        result = true;
    }else{
        result = false;
    }
    return result;
}

// 入力した都市名の該当するタイムゾーンパネルがすでにあるかチェック。あるならUTCとの時差を返す。
function checkExistPanel(result_city_row){
    var timezone = timezoneData[result_city_row][0];
    var result;
    // パネルを探す処理
    if($('#panel' + timezone).length){
        result = true;
    }else{
        result = false;
    }
    return result;
}

