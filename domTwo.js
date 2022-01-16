// Select the element node(s) for which you want the JavaScript script to respond.
// Indicate which event will trigger the response (binding event to the DOM node).
// Define the code you want to execute when the event occurs. functions 

// var btn = document.querySelector("button");
// function changeColor() {
//     btn.style.backgroundColor = "pink"; //change background color
//     btn.style.color = "black"; //change font color
//     document.querySelector("p").innerHTML = "Look! The button changed its color." //add text
// }
// btn.onclick = changeColor; //event handler

// var btn = document.querySelector("button");
// function changeColor() {
//     btn.style.backgroundColor = "yellow"; //change background color
//     btn.style.color = "red"; //change font color
//     document.querySelector("p").innerHTML = "Look! The button changed color." //add text
// }
// btn.addEventListener("click", changeColor); //adds event listener
// btn.removeEventListener("click", changeColor);

var btn = document.querySelector("button");
function changeColor(anyParameter){ //function declaration
  btn.style.backgroundColor = "red"; //change background color
  btn.style.color = "white"; //change font color
  document.querySelector("p").innerHTML = "Look! The button changed its color." //add text
}
btn.addEventListener("click", function(){
  changeColor(1); //function with a parameter
}, false); //adds event listener with anonymous function