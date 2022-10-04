function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffinHrs) ;

    let diffInMin = (diffinHrs - hh) * 60;
    let mm = math.floor(diffinMin);

    let diffInSec = (diffinHrs - mm) * 60;
    let ss = math.floor(diffinSec);

    let diffInMs = (diffinHrs - ss) * 100;
    let ms = math.floor(diffinMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMs = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMs}`;
}

let startTime;
   let elapsedTime = 0;
   let timerInterval;

   //create funcion to modify innerHTML

   function print (txt) {
    Document.getElementByld("display").innerHTML = txt;
   }

   //Create start , pause and reset functions 
   function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date,now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButtoon("PAUSE");
   }

   function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
   }

   function reset() {
    clearInterval(timerInterval)
    print("00:00:00");
    showButton("PLAY");
   }

   //create funcion to display button

   function showButton(buttonKey) {
    const buttonToShow = buttonKey 
    "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey 
    "PLAY" ? pauseButton : playButton;
   }

   //create event listeners

   let playButton = document.getElementById("playButton");
   let pauseButton = document.getElementById("pauseButton");
   let resetButton = document.getElementById("resetButton");

   playButton.addEventListener("click", start);
   pauseButton.addEventListener("click", pause);
   resetButton.addEventListener("click", reset);