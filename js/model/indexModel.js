import axios from "axios";

class Model{
    constructor(){
       
    }
    async getMoviesFromBackend(){
        const  res = await axios.get('http://localhost:3000/movies');
        const movies= res.data
        return movies
    }
}
export default Model