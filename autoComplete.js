// テキスト入力で入力候補を表示
$(function(){
    var data = [];
    for(var i = 0; i < all_data.length; i++){
        data[i] = all_data[i][1];
    }

    $('#city_name').autocomplete({
        source: data
    });
});
