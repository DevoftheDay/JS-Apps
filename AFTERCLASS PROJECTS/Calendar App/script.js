function showTime() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM"
    }

    y = (y < 10) ? "0" + y: y;
    m = (m < 10) ? "0" + m: m;
    d = (d < 10) ? "0" + d: d;

    var time = y + ":" + m + ":" + d + ":" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000)

}

showTime();
