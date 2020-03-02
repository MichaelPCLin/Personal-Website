let xCount = 0;
let leftPosition = 0;
let topPosition = 0;
const twoSeconds = 2000;
const percent = 100;
const topBoarder = 30;
const bottomBoarder = 70;

function incrementScore(){
    xCount++;
    document.getElementById('score').innerHTML = "Score = " + xCount;
}

function start() {
    shift();
    document.getElementById("zombie").style.visibility = "visible";
    document.getElementById("end").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
    document.getElementById('score').innerHTML = "Score = " + xCount;
    document.getElementById("start").style.visibility = "hidden";
}
document.getElementById('start').onclick = start;
let timer = setInterval(shift, twoSeconds);

function shift() {
    document.getElementById('myAudio').pause();
    document.getElementById('myAudio').currentTime = 0;
    document.getElementById('zombie').onclick = action;
    document.getElementById('zombie').src = "Images/DARKRYAN.png";
    leftPosition =  Math.random() * percent;
    topPosition = Math.random() * percent;

    while(topPosition < topBoarder || topPosition > bottomBoarder ){
        topPosition = Math.random() * percent;
    };

    while(leftPosition < topBoarder || leftPosition > bottomBoarder ){
        leftPosition = Math.random() * percent;
    };

    console.log(leftPosition + " " + topPosition);
    document.getElementById('zombie').style.left = leftPosition + "%";
    document.getElementById('zombie').style.top = topPosition + "%";
}
document.getElementById('zombie').onclick = action;

function action(){
    document.getElementById('zombie').onclick = null;
    deathAnimation()
    setTimeout(shift, 1300);
    incrementScore();
}

function deathAnimation(){
    document.getElementById('zombie').src = "Images/death.gif";
    document.getElementById('myAudio').play();
}

function endGame() {
    xCount = 0;
    document.getElementById('score').innerHTML = "Score = " + xCount;
    document.getElementById('zombie').style.left = "45%";
    document.getElementById('zombie').style.top = "40%";
    clearInterval(timer);
    document.getElementById('zombie').onclick = null;
}
document.getElementById('end').onclick = endGame;