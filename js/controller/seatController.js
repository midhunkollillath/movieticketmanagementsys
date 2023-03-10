import Model from "../model/seatModel.js";
class Controller{
    constructor(){
        this.model= new Model();
    }
    getSeats(){
        return this.model.getSeats();
    }
    loadingSeatFromBackend(id){
        return this.model.loadingSeatFromBackend(id);
        
    }
   
    selectedSeat(i){
       return this.model.selectedSeat(i);
    }
    bookedSeat(i){
        return this.model.bookedSeat(i);
    }
}

export default Controller;