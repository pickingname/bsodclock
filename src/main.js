window.onload = function() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var totalSeconds = (hour * 60 * 60) + (minute * 60) + second;
  var percent = (totalSeconds / 86400) * 100;
  var elem = document.getElementById("daypercent");
  var count = 1;
  var interval = setInterval(function() {
    if (count <= percent) {
      elem.innerHTML = count + "% complete";
      count++;
    } else {
      clearInterval(interval);
    }
  }, 100); // Fixed interval of 0.2 seconds
}
