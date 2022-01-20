// document.addEventListener('DOMContentLoaded', function(){

    //grab the quote list and its ul properties
    const list = document.querySelector('#quote-list ul');
    const forms = document.forms;
  
    // delete quotes
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
      }
    });


  
    // add quotes 
    const addForm = forms['add-quote'];
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
  
      // create elements
      const value = addForm.querySelector('input[type="text"]').value;
      const li = document.createElement('li');
      const quoteName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  
      // add text content
      quoteName.textContent = value;
      deleteBtn.textContent = 'Delete';
      
  
      // add classes
      quoteName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(quoteName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  
    // hide quotes
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
      if(hideBox.checked){
        list.style.display = "none";
      } else {
        list.style.display = "block";
      }
    });
  
    // filter quotes
    const searchBar = forms['search-quotes'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const quotes = list.getElementsByTagName('li');
      Array.from(quotes).forEach((quote) => {
        const title = quote.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          quote.style.display = 'block';
        } else {
          quote.style.display = 'none';
        }
      });
    });
  
//     // tabbed content
//     const tabs = document.querySelector('.tabs');
//     const panels = document.querySelectorAll('.panel');
//     tabs.addEventListener('click', (e) => {
//       if(e.target.tagName == 'LI'){
//         const targetPanel = document.querySelector(e.target.dataset.target);
//         Array.from(panels).forEach((panel) => {
//           if(panel == targetPanel){
//             panel.classList.add('active');
//           }else{
//             panel.classList.remove('active');
//           }
//         });
//       }
//     });
  
//   })

  
// var counterButton = document.getElementById('lib-button');
// var todayDate= new Date(); 
// var mouseOver = function() {
//     counterButton.innerHTML = todayDate; 
// };

// var mouseOut= function() {
//     counterButton.innerHTML=counterButton;
// };
