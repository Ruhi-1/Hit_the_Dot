/*----- constants -----*/
const gameLength = 20;
timerID = null
let score = 0;
let dot = '';
let oldDot = '';
let playing = false;
let currentpos = -1;
let numholes = 6 * 10;
function clear() {
    for(let i=0; i<document.rtp.elements.length; i++)
    document.rtp.elements[i].checked=true;
}

/*----- cached element references -----*/
const total = document.getElementById("circle");
const playBtnClick = document.getElementById('reset');
const table = document.getElementById('grab');
/*----- event listeners -----*/
playBtnClick.addEventListener("click", makeId, startPlay);
table.addEventListener('click', scoreBtn);

/*----- functions -----*/


function checkButton()
    {
      playBtnClick.disabled = true;
      return true;
    }

function makeId() {
    var randomNumber=Math.floor(Math.random() * numholes);
    dot = document.getElementById(randomNumber);
    // console.log(dot);
    dot.checked = true;
    checkButton();
    startPlay();
};

function hithead(id) {
    dot.checked = false;
    oldDot = document.getElementById(id)
    oldDot.checked = false
    dot=Math.floor(Math.random() * numholes);
    dot = document.getElementById(dot)
    dot.checked = true;
}

function startPlay(){
var timeleft = 0;
var downloadTimer = setInterval(function(){
    timeleft += 1;
     document.getElementById("record").value = timeleft;
    if(timeleft == 20){
        clearInterval(downloadTimer);
    }
}, 1000)};

function scoreBtn(evt) {
    if (evt.target.id === oldDot.id) {
        score++;
    } else {
        score--;

    }
};







