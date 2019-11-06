/*----- constants -----*/
gameLength = 20;
timerID = null
var playing = false;
var currentpos = -1;
var numholes = 6 * 10;
function clear() {
    for(var i=0; i<document.rtp.elements.length; i++)
    document.rtp.elements[i].checked=false;
}







/*----- app's state (variables) -----*/



/*----- cached element references -----*/
var total = document.getElementById("circle");
// var dot = document.getElementByClassName("dots");
var playBtnClick = document.getElementById('reset');
// console.log(playBtnClick);









/*----- event listeners -----*/
document.getElementById('reset')
    .addEventListener("click", makeId);
// document.getElementById('circle')
//     .addEventListener("click", movesMade);



/*----- functions -----*/

function makeId()
    {
    var randomNumber=Math.floor(Math.random() * 60);
    
    var dot = document.getElementById(randomNumber);
    
    dot.checked = true;
    console.log(dot);
}
// function movesMade() {
//     var randomNumber=Math.floor(Math.random() * dot)
//     console.log(randomNumber);
// }

function hithead(evt) {
    var dot=Math.floor(Math.random() * 60);
    var dot = document.getElementById(dot)
    dot.checked = true;
    console.log(dot)
}








