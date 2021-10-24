'use strict';

// Navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    if(e.target.dataset.link === null) {
        return;
    }
    scrollIntoView(e.target.dataset.link);
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

//toggle
const toggleBtn = document.querySelector('.toggleBtn');
toggleBtn.addEventListener('click', () => {
    if(navbarMenu.className === 'navbar__menu') {
        navbarMenu.classList.add('visible');
    } else if(navbarMenu.className === 'navbar__menu visible') {
        navbarMenu.classList.remove('visible');
    }
})

// Home
const contactBtn = document.querySelector('.home__contactBtn');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});