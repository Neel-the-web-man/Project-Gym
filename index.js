navigationbar = document.querySelector('.navigationbar');
hamburger = document.querySelector('.hamburger');
navbarlist = document.querySelector('.navbarlist');
hamburger.addEventListener('click',()=>{
    navigationbar.classList.toggle('h-nav');
    navbarlist.classList.toggle('v-class'); 
});