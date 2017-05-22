// 東京の世界標準時との時差
const TIMEDIF_TOKYO = 9;

// 桁数が1桁だったら先頭に0を加えて2桁に調整する
function set2fig(num) {
    var ret;
    if( num < 10　){
        ret = "0" + num;
    }else{
        ret = num;
    }
    return ret;
}

// 「分」の「時」への繰り上がり処理
function minUptoHour(minute){
    var ret = [];
    if(minute >= 0 && minute < 60){
        ret = [minute, 0];
    }else if(minute < 0){
        ret = [minute + 60, -1];
    }else{
        ret = [minute - 60, 1];
    }
    return ret;
}

// 「時」の「日」への繰り上がり処理
function hourUptoDay(hour){
    var ret = [];
    if(hour >= 0 && hour < 24){
        ret = [hour, 0];
    }else if(hour < 0){
        ret = [hour + 24, -1];
    }else{
        ret = [hour - 24, 1];
    }
    return ret;
}

// 受け取ったタイムゾーンの時刻表示をリターン
function setClockToText(timezone, utc_time){
    var timedif_hour = (timezone - timezone % 100) / 100;   // 430 なら 4 を取り出し
    var timedif_min = timezone % 100;                       // 430 なら 30を取り出し
    var min_and_uphour = minUptoHour(utc_time['minute'] + timedif_min);
    var hour_and_upday = hourUptoDay(utc_time['hour'] + timedif_hour + min_and_uphour[1]);

    return set2fig(hour_and_upday[0]) + "時" + set2fig(min_and_uphour[0]) + "分" + set2fig(utc_time['second']) + "秒";
}

// 世界標準時の「時・分・秒」を得る
function getUtcTime(){
    var now_time = new Date(); // 現在時刻取得
    var utc_time = {}; // 世界標準時の「時・分・秒」格納用
    if((now_time.getHours() - TIMEDIF_TOKYO) < 0){
        utc_time['hour'] = now_time.getHours() - TIMEDIF_TOKYO + 24;
    }else{
        utc_time['hour'] = now_time.getHours() - TIMEDIF_TOKYO;
    }
    utc_time['minute'] = now_time.getMinutes();
    utc_time['second'] = now_time.getSeconds();

    return utc_time;
}

// 各パネルの時計部分に時刻を埋め込む
function showWorldClock(){
    var ary_idnum = [];
    var num = 0;
    $.each($('.clock'), function(){
        var idstr = $(this).attr("id");
        var idnum = idstr.match(/-?[0-9]+/g);
        ary_idnum[num] = Number(idnum);
        num++;
    });

    var utc_time = getUtcTime(); // 「時・分・秒」の連想配列格納
    for(var i = 0; i < num; i++){ // num == ary_idnum
        $('#clock' + ary_idnum[i]).text(setClockToText(ary_idnum[i], utc_time));
    }
}

// 1秒ごとに時計を更新
setInterval('showWorldClock()', 1000);