function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
      clearInterval(interval);
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        fadeTimer();

        if (--timer < 0) {
            timer = duration;

    // Put all CSS back to First Iteration
        clearInterval(interval);
        document.getElementById("Pulse").style.animation = "";
        document.getElementById("Start").style.display = "";
        }
    }, 1000);
}

window.onclick = function () {
    display = document.getElementById('Timer');
    var oneMinute = 60 ; //,
    // display = document.getElementById('Timer');
    startTimer(oneMinute, display);
};



/* *function fadeTimer()  {
        console.log("Display: ")
        var fadeEffect = setInterval(function () {
            if (!display.style.opacity) {
                display.style.opacity = 1;
            }
            if (display.style.opacity > 0) {
                display.style.opacity -= 0.05;
            } else {
                clearInterval(fadeEffect);
            }
        }, 100);
    }
**/
/**
window.onclick = function showTimer ()  {
        console.log("Display2: ")
        //TODO fix damit man den Timer wieder einblenden kann
        var showEffect = setInterval(function () {
            if (!display.style.opacity) {
                display.style.opacity = 1;
            }
            if (display.style.opacity < 1) {
                display.style.opacity += 0.5;
            } else {
                clearInterval(showEffect);
            }
        }, 100);
    }
**/
