/*----- constants -----*/
const gameLength = 20;
timerID = null
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

/*----- event listeners -----*/
playBtnClick
    .addEventListener("click", makeId);

/*----- functions -----*/

function checkButton()
    {
      playBtnClick.disabled = true;
      return true;
    }

function makeId() {
    var randomNumber=Math.floor(Math.random() * numholes);
    var dot = document.getElementById(randomNumber);
    console.log('makeId', dot)
    console.log('makeId', randomNumber)
    dot.checked = true;
    // console.log(dot);
    checkButton();
};

function hithead(id) {
    const oldDot = document.getElementById(id)
    oldDot.checked = false
    var dot=Math.floor(Math.random() * numholes);
    var dot = document.getElementById(dot)
    dot.checked = true;
    // console.log(dot)
}




