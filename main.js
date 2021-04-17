function showTime() {
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let p = `AM`;
  if (hour > 12) {
    hour -= 12;
    p = `PM`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  let myTime = `${hour}:${minute}:${second} ${p}`;

  document.getElementById("ClockDisplay").textContent = myTime;

  setTimeout(showTime, 1000);
}
showTime();
