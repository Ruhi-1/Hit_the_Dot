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
var dot = document.getElementsByClassName("dots");
var playBtnClick = document.getElementsByClassName("button");




/*----- event listeners -----*/
// document.getElementsByClassName("button")
//     .addEventListner('click', playBtnClick);



/*----- functions -----*/
// var i=0;
// var inhtml="."
// var num=[];
// function evt() {
//     i=Math.floor(Math.random()*60)
//     //alert(i)
//     while (i<=60){
//     document.getElementById("dot").innerHTML = inhtml + "."
//     inhtml = document.getElementById("dot").innerHTML
//     if (inhtml.length>num){ 
//         inhtml=document.getElementById("dot").innerHTML+"<br />"
//         num=num+20
//     }
//     i++;
//     }
// }




