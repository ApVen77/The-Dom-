// **DOM EXERCISE**
 // add more event listeners
  document.querySelector("#reset").addEventListener("click",resetButtonHandler);
  document.querySelector("#ghosting").addEventListener("mouseover", function() { this.remove(); });
  document.querySelector("#resize").addEventListener("mouseenter", doubleWidth);
  document.querySelector("#resize").addEventListener("mouseleave", resetWidth);
  document.querySelector("body").addEventListener("keyup", function(e)  {
    const term = e.target.value.toLowerCase();
    const quotes = list.getElementsByTagName('li');
      
  });


// 3. Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.

var myPic= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
var image= new Image();
image.src= myPic; 
document.getElementById('greeting').appendChild(image); 

var img= document.createElement('img');
img.src= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"; 
greeting_div.appendChild(img);

var img= document.createElement('img');
img.src= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"; 
document.getElementById('greeting').appendChild(img); 

// 7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.

function doubleWidth() {
    resize.style.width= '400px'; 
}

function normalWidth() {
    resize.style.width= '200px'
}

function doubleWidth() {
    this.style.width= '400px'; 
}

function normalWidth() {
    this.style.width= '200px'
}

function resetButtonHandler() {
    var img= document.createElement('p');
    img.textContent="Hello World";

    greeting_div.appendChild(img);
    
}
