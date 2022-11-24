function digitalClock() {
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds =  new Date().getSeconds();
var dayTime = "AM";
var weekDays = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
var day = weekDays[new Date().getDay()];
var date = new Date().toDateString();

if (hours == 0) {
    hours = 12;
}

if (hours > 12) {
    hours = hours - 12;
}

if (hours >= 12) {
    dayTime = "PM";
}

hours = (hours < 10)? "0" + hours : hours;
minutes = (minutes < 10)? "0" + minutes : minutes;
seconds = (seconds < 10)? "0" + seconds : seconds;
var time =  hours + " : " +  minutes + " : " + seconds + " " + dayTime;
document.querySelector("#digitalClock").innerHTML = time;
document.querySelector(".date").innerHTML = date;

for (let i = 0; i < weekDays.length; i++) {
document.querySelectorAll("span")[i].innerHTML= weekDays[i];

if (day == weekDays[i]) {
    document.querySelectorAll("span")[i].style.color= "white";
}
}


setTimeout(digitalClock, 1000);

}
digitalClock();