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

// Home
const contactBtn = document.querySelector('.home__contactBtn');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});