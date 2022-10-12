let start_stop_btn = document.getElementById("start-stop");
let reset_btn = document.getElementById("reset");

console.log(start_stop_btn);
console.log(reset_btn);

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

// ADDING EVENT LISTENER ON BUTTONS
start_stop_btn.addEventListener("click", ()=>{
    if(start_stop_btn.innerHTML == "Start"){
        timer = true;
        stopWatch();
        start_stop_btn.innerHTML = "Stop";
    }

    else if(start_stop_btn.innerHTML == "Stop"){
        timer = false;
        start_stop_btn.innerHTML = "Start";
    }
});

reset_btn.addEventListener("click", ()=>{
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";

    start_stop_btn.innerHTML = "Start";
})

// ADDING STOP WATCH FUNCTIONALITY
function stopWatch(){
    if(timer == true){
        count++;

        if(count == 100){
            second++;
            count = 0;
        }

        if(second == 60){
            minute++;
            second = 0;
        }

        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }

        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let countString = count;

        if(hour<10){
            hourString = "0"+hourString;
        }
        if(minute<10){
            minuteString = "0"+minuteString;
        }
        if(second<10){
            secondString = "0"+secondString;
        }
        if(count<10){
            countString = "0"+countString;
        }

        document.getElementById("hr").innerHTML = hourString;
        document.getElementById("min").innerHTML = minuteString;
        document.getElementById("sec").innerHTML = secondString;
        document.getElementById("count").innerHTML = countString;

        setTimeout(stopWatch, 10);
    }
}