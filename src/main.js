window.onload = function() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var totalSeconds = (hour * 60 * 60) + (minute * 60) + second;
  var percent = (totalSeconds / 86400) * 100;
  document.getElementById("daypercent").innerHTML = percent.toFixed(0) + "% complete";
}