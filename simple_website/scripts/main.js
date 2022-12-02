
let contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();
})


// Initiating Materialize
$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });




