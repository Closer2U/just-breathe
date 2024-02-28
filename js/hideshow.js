var button = document.getElementById("fadeBtn");

function fade() {
    button.classList.remove("hide-timer-button")
    button.classList.add("hide-timer-button_Fade")
}

function reappear () {
    button.classList.remove("hide-timer-button_Fade")
    button.classList.add("hide-timer-button_Reappear")
    console.log("reappear()")

    setTimeout(function() {  
        button.classList.remove("hide-timer-button_Reappear"); 
        button.classList.add("hide-timer-button_None");
        console.log("6s vergehen")
      }, 6000);
}