// Start with this HTML and save it as "about_me.html":
  
// Add a script tag to the bottom of the HTML body.//
// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "list-item".
// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
//innerHTMl modifies text(old way)  textcontent (more secure less browser)
document.body.style.fontFamily= 'Arial, Sans-serif';

document.body.style.fontSize= '40px'; 
document.getElementById('nickname').textContent= "Woman"; 
document.getElementById('favorites').textContent= "Politics"; 
document.getElementById('hometown').textContent= "Milwaukee"; 
document.getElementById('interests').textContent= "Kids, Fun, and Sun"; 

var items= document.getElementsByTagName('li'); 
for (let i= 0; i<items.length; i++) {
    items[i]. className= 'list-item'; 
}

var picture= document.createElement('img');
picture.src= 'https://ca.slack-edge.com/T018R8C5LSE-U018XDUCS12-7235bcf7e011-512'
picture.style.width= '250px';
picture.style.height= '200px';
picture.style.border= " 2px black solid"; 
document.body.appendChild(picture); 