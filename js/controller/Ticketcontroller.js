import Model from "../model/Bookingmodel";
class Controller{
   constructor(){
    this.model= new Model();
   }
   getBooking(){
    return this.model.getBooking();
   }
    
}
export default Controller;    