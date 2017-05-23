// タイムゾーンに都市と国を追加
function addCityToPanel(timezone_num, city, country){
    $('<div class="timezone"></div>')
        .appendTo('#panel' + timezone_num)
        .append('<div class="city" id=' + city + '>' + city +'</div>')
        .append('<div class="country" id=' + country + '>' + country + '</div>')
        .append('<div class="mask"><div class="caption"><input type="button" value="削除" class="del"></div></div>');
}