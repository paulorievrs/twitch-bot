const fs = require('fs');

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        
        if (--timer < 0) {
            timer = 0;
            fs.writeFileSync('./timer.txt', "ATRASOU", (err) => {
                console.log(err);
            });
        } else {
            fs.writeFileSync('./timer.txt', minutes + ":" + seconds, (err) => {
                console.log(err);
            });
        }
    }, 1000);
}

function start(tempo) {
    let fiveMinutes = 60 * tempo;
    startTimer(fiveMinutes);
}

start(process.argv[2]);
