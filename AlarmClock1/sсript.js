var isAlarmShown = false;
function setAlarm() {
    var alarmHours = document.getElementById("hours").value;

    var alarmMinutes = document.getElementById("minutes").value;

    let day_night = "AM";
    if (alarmHours > 12) {
        day_night = "PM"
        alarmHours -= 12;
        alarmHours = "0" + alarmHours;
    }
    document.getElementById("statusMessage").innerHTML = "The alarm is set for " + alarmHours + ":" + alarmMinutes + " " + day_night;

}


setInterval(() => {
    const time = document.querySelector(".display #time")
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
        day_night = "PM"
        hours -= 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;


    var alarmHours = document.getElementById("hours").value;

    var alarmMinutes = document.getElementById("minutes").value;
    if (alarmHours > 12) {
        alarmHours -= 12;
        alarmHours = "0" + alarmHours;
    }

    if (!isAlarmShown && hours == alarmHours && minutes == alarmMinutes) {
        showPopup();
        isAlarmShown = true;
    }
    else {
        console.log(isAlarmShown, hours, alarmHours, (minutes).toString(), alarmMinutes)
    }

})
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';

    // Remove the event listener when closing the popup
    document.removeEventListener('click', closePopupOnClick);
}
function closePopupOnClick(event) {
    var popup = document.getElementById('popup');
    // Check if the click is outside the popup
    if (!popup.contains(event.target)) {
        popup.style.display = 'none';
        document.removeEventListener('click', closePopupOnClick);
    }
}
