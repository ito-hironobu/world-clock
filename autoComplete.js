// テキスト入力で入力候補を表示
$(function(){
    var city = [];
    for(var i = 0; i < timezoneData.length; i++){
        city[i] = timezoneData[i][1];
    }

    $('#city_name').autocomplete({
        source: city
    });
});
