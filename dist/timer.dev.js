"use strict";

var fs = require('fs');

function startTimer(duration) {
  var timer = duration,
      minutes,
      seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    fs.writeFileSync('./timer.txt', minutes + ":" + seconds, function (err) {
      console.log(err);
    });

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function start() {
  var fiveMinutes = 60 * 5;
  startTimer(fiveMinutes);
}

start();