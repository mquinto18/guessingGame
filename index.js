let number = document.querySelector("#number");
let btn = document.querySelector("#button");
let guessNo = document.querySelector("#guess");
let msgWin = document.querySelector("#win")
let msghigh = document.querySelector("#high")
let msgLow = document.querySelector("#low")
let background = document.querySelector(".guess")

btn.addEventListener("click", numberGuess);

let randomNum = Math.floor(Math.random() * 100) + 1;
let noGuess = 0;

function showVideo() {
    const video = document.getElementById("myVideo");
    video.style.display = "block";
    video.muted = false; // Unmute the video
    video.play();
}

function numberGuess(){
    let userGuess = number.value;
    if(userGuess < 1 || userGuess > 100){
        alert("Enter number between 1 to 100!");
    }else{
        noGuess++;
        msgLow.textContent = "";
        msghigh.textContent = "";
        if(userGuess < randomNum){
            msgLow.textContent = "Guess Too Low!";
            number.style.borderColor = "red";
            guessNo.textContent = noGuess;
        }else if(userGuess > randomNum){
            msghigh.textContent = "Guess Too high! ⬆";
            number.style.borderColor = "red";
            guessNo.textContent = noGuess;
        }else if(userGuess == randomNum){
            msgWin.textContent = "NICE YOU GOT IT!!!";
            number.style.borderColor = "green";
            guessNo.textContent = noGuess;
            btn.disabled = true;
            background.style.display = "none"
            showVideo();
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // ... Your existing DOMContentLoaded event handler ...
  });