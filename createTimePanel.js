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