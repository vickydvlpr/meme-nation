"use strict";
const topBar = document.querySelector('.topbar');
const humberger = topBar.querySelector('.humberger');




    
    
var state = 0;
function navOpen_close() {
    const list = topBar.querySelector('.list-items');
    if(state == 0){
        state = 1;
        list.classList.add('active'); 
        humberger.classList.add('active');
    } else {
        state = 0;
        list.classList.remove('active');
        humberger.classList.remove('active'); 
    } 
}

humberger.addEventListener('click', navOpen_close);