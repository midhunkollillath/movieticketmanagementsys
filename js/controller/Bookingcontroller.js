import Model from "../model/Bookingmodel";
class Controller{
    constructor(){
        this.model = new Model();
    }
    getBooking(){
        return this.model.getBooking();
    }
    async setBooking(names,email,phone){
        if(names ==='' || names === null){
        }
        if(phone.length <= 10){
        }
        alert('form submitted')
        const seatsFromLocalStorage = JSON.parse(localStorage.getItem('selectedSeats'))
  
        const values ={
            name: names,
            email: email,
            phone: phone,
            seatsSelected: seatsFromLocalStorage
        };
        console.log(values)
        return this.model.setBooking(values)
    
    }
}
export default Controller;