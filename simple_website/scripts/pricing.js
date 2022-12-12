document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
});

// Type Effect
let typed = new Typed('.auto-type', {
    strings: ['Professionalism', 'Efficiency', 'Practicality'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
});