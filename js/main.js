/*----- constants -----*/
const gameLength = 20;
timerID = null
let score = 0;
let dot = '';
let oldDot = '';
let playing = false;
let numholes = 6 * 10;

/*----- cached element references -----*/
const total = document.getElementById("circle");
const playBtnClick = document.getElementById('reset');
const restartBtnClick = document.getElementById('exit');
const table = document.getElementById('grab');
/*----- event listeners -----*/
playBtnClick.addEventListener("click", makeId, startPlay);
restartBtnClick.addEventListener("click", clearOverlay);


/*----- functions -----*/
function clearOverlay() {
    document.getElementById("overlay").style.display = "none";
    clearBoard();
}
function clearBoard() {
    score = 0;
    document.getElementsByClassName('scorecard')[0].value = score;
    document.getElementById("record").value = 0;
    dot.checked = false;
}
function checkButton() {
    playBtnClick.disabled = true;
    return true;
}

function makeId() {
    var randomNumber=Math.floor(Math.random() * numholes);
    dot = document.getElementById(randomNumber);
    dot.checked = true;
    checkButton();
    startPlay();
};

function hithead(id) {
    dot.checked = false;
    oldDot = document.getElementById(id)
    oldDot.checked = false
    scoreBtn(dot.id == oldDot.id);
    dot=Math.floor(Math.random() * numholes);
    dot = document.getElementById(dot)
    dot.checked = true;
}

function startPlay() {
    var timeleft = 0;
    var downloadTimer = setInterval(function(){
        timeleft += 1;
        document.getElementById("record").value = timeleft;
        if(timeleft == 20){
            clearInterval(downloadTimer);
            stopgame();
        }
}, 1000)};

function scoreBtn(userHit) {
    if (userHit) {
        score++;
    } else {
        score == 0 ? 0 : score--;
    }
    document.getElementsByClassName('scorecard')[0].value = score;
};

function stopgame() {
    playing=false;
    document.game.timeleft=0;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("endscore").innerText = "Your Score is  " + score;
    playBtnClick.disabled = false;
      return false;
};