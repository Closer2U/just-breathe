function startTimer(duration, display) {
 
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;

            //**** lässt Timer nach Ablauf der Minute stoppen und blendet START wieder ein  *****//
            clearInterval(interval);
            document.getElementById("Pulse").style.animation = "";
            document.getElementById("Start").style.display = "";
        }
    }, 1000);

fade();
}


//window.onload = function () {
     document.getElementById("Pulse").onclick = function () {
 //function startMinute() {
    var oneMinute = 60,
        display = document.getElementById('Timer');
    startTimer(oneMinute, display);
};
