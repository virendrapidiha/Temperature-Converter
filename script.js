document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    const reservationForm = document.getElementById('reservation-form');
    const reservationMessage = document.getElementById('reservation-message');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        reservationMessage.innerText = `Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been reserved.`;
        reservationForm.reset();
    });
}






// const http= require("http");
// let server =http.createServer(function(req))




// const fs = require('fs')
// fs.writeFile("hey.txt" ,function(err)){
//     console.log()
