let openNav = document.querySelector('.open-nav');
let closeNav = document.querySelector('.close-nav');
let navItems = document.querySelector('.nav-items');
let contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
})

window.onscroll = () => {
    if(window.pageYOffset > 100){
        navItems.classList.add('nav-active');
    } else if(window.pageYOffset < 100)
    {
        navItems.classList.remove('nav-active');
    }
}

openNav.addEventListener('click', () => {
    openNav.style.display = 'none';
    closeNav.style.display = 'inline-block'
    navItems.style.opacity = 1;
});

closeNav.addEventListener('click', () => {
    openNav.style.display = 'inline-block';
    closeNav.style.display = 'none';
    navItems.style.opacity = '0';
});


// Initiating Materialize
$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });




