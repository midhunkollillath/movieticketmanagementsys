import axios from "axios";
class Model{
    constructor(){
        this.seats=[];
    }
       getSeats(){
       return this.seats; 
    }
    async loadingSeatFromBackend(id){
        const data = await fetch('http://localhost:3000/screenings/'+id)
        const screening = await data.json()
        console.log(screening)
        const screens = await data.json()
       console.log(screens)

      
       const seats= await data.json();

       this.seats=seats.map(seat =>{
        if(seat===true){
            return'booked'
        }
       else{
            return'available'
        }
       })
        
       console.log(this.seats)
       return true
    }
  
    selectedSeat(i){
        console.log(this.seats[i])
        if(this.seats[i]==='available'){
            this.seats[i]='selected';
            console.log(this.seats[i])
        }else if(this.seats[i]==='selected'){
            this.seats[i]='available';
            console.log('available')
        
        }
        console.log(this.seats)
    }
        bookedSeat(i){
            let selectedSeats=[];
            for(let i=0;i<this.seats.length;i++){
                if(this.seats[i]==='selected'){
                    selectedSeats.push(i)
                }
            }
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats))
            
        }
    
    }


export default Model;