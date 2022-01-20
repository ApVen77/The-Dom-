document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#quote-list ul');
    const forms = document.forms;
  
    // delete quotes
    list.addEventListener('click', (e) => {
      if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
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
      deleteBtn.textContent = 'delete';
  
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
        list.style.display = "initial";
      }
    });
  
    // filter quotes
    const searchBar = forms['search-quotes'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const quotes = list.getElementsByTagName('li');
      Array.from(quotes).forEach((quotes) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          quotes.style.display = 'block';
        } else {
          quotes.style.display = 'none';
        }
      });
    });
  
    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
  
  })