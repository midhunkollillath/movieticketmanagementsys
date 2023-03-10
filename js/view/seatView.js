// fetch('http://localhost:3000/seats')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

import Controller from '../controller/seatController.js';
import Model from '../model/Bookingmodel';
let root = document.getElementById('root')
const controller = new Controller();
function render() {
    root.innerHTML = ''
    const seats=controller.getSeats()
    console.log(seats)
    for (let i = 0; i < seats.length; i++) {
        const newseat = document.createElement('div')
        newseat.classList.add('seats')


        if (seats[i] === 'booked') {
            newseat.classList.add('booked')
        } if (seats[i] === 'selected') {
            newseat.classList.add('selected')
        }
        root.appendChild(newseat);
        newseat.addEventListener('click', e => {
            controller.selectedSeat(i)
            render()
        })
    }
}



const book_button = document.getElementById('book-button')
console.log(book_button)

book_button.addEventListener('click', () => {
    controller.bookedSeat();

    window.location.href = "./Booking.html";
})
function init(){
    const url = new URLSearchParams(document.location.search)
    const screening_id = url.get('screening_id')
   controller.loadingSeatFromBackend(screening_id)
   .then(result=>{
    render()
    console.log(result)
   })
   .catch(err=>{
    console.log(err)
   })
}
init()