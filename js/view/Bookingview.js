import Controller from '../controller/Bookingcontroller.js';
const controller = new Controller()
const form = document.getElementById('form');
const names = document.getElementById('names');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const forms = document.querySelector('form')

console.log('hi')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
   controller.setBooking(names.value,email.value,phone.value)
   .then(data => {
        console.log(data)
   })
   .catch(err => {
    console.log(err)
   })
   render()
    })
    function render(){
        const messeges = controller.getBooking();
        console.log(messeges)
    }