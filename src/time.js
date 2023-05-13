function updateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var timeString = hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0') + ":" + second.toString().padStart(2, '0');
    var ampm = hour >= 12 ? "PM" : "AM";
    document.getElementById("time").innerHTML = timeString + " " + ampm;
}

// Call updateTime() once to display the initial time
updateTime();

// Call updateTime() every second to keep the time updated
setInterval(updateTime, 1000);