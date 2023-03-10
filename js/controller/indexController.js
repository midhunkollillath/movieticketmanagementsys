import Model from "../model/indexModel";
class Controller{
    constructor(){
    this.model= new Model()
    }
     getMoviesFromBackend(){
        return this.model.getMoviesFromBackend();
    }
}
export default Controller