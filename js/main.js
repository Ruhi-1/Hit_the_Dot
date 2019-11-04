/*----- constants -----*/
gameLength = 20;
timerID = null
var playing = false;
var currentpos = -1;
var numholes = 6 * 10;
function clearholes() {
    for(var i=0; i< document.circles.elements.length; i++)
    document.circles.elements[i].checked=false;
}



/*----- app's state (variables) -----*/



/*----- cached element references -----*/
var total = document.getElementById("circle");
var dot = document.getElementsByClassName("dots");
var playBtnClick = document.getElementsByClassName("button");




/*----- event listeners -----*/
// document.getElementsByClassName("button")
//     .addEventListner('click', playBtnClick);



/*----- functions -----*/


function hithead(id){
    if(playing==false) {
        clearholes();
    }
}
