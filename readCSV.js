var timezoneData = [];

function getCSVFile() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        createArray(xhr.responseText);
    };

    xhr.open("get", "timezoneData.csv", true);
    xhr.send(null);
}
getCSVFile();

function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}

function createArray(csvData) {
    var tempArray = csvData.split("\n");
    var timezoneData = new Array();
    for(var i = 0; i<tempArray.length;i++){
        timezoneData[i] = tempArray[i].split(",");
    }
    //console.log(timezoneData);
}