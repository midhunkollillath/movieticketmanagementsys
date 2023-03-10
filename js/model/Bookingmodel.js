import axios from "axios";

class Model{
    constructor(){
        this.messeges = []
    }
     async getBooking(){
         
         const userDetails= await axios.get('http://localhost:3000/booking')

         return userDetails;
    }
    async setBooking(book){
        const data = await axios.post('http://localhost:3000/booking', book)
       
        return data;
    }
    
}
export default Model;