let seconds = 0;
let interval = null;

let currentTime = 0;



function timer() {
    seconds++;

    let secs = `${seconds % 60}`.padStart(2, '0');
    let hrs = `${Math.floor(seconds / 3600)}`.padStart(2, '0');
    let mins = `${Math.floor((seconds - (hrs * 3600)) / 60)}`.padStart(2, '0');

    currentTime = `${hrs}:${mins}:${secs}`;

    document.getElementById("timer").innerHTML = currentTime;


    // loop timer
    let inputTime = document.getElementById("inputTime").value;

    if (currentTime === inputTime) {
        reset();
        start();

        document.getElementById("timer-audio").play();
    }
}


function stop() {
    clearInterval(interval);

    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
}

function start() {
    if (interval) {
        return
    }
    
    interval = setInterval(timer, 1000);
}




