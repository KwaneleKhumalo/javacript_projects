document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
})


// Type Effect
let typed = new Typed('.auto-type', {
    strings: ['Web Design', 'Graphic Design', 'Digital Marketing'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
});



// Initiating Materialize
$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
