import axios from "axios";
import { PokeapiResponse } from "../bases/interfaces/pokeapi-response.interface";

//adaptar una funcionalidad externa de terceros a mi codigo
export class PokeApiAdapter{

private readonly axios= axios;
    async get(url:string){
        const { data } = await this.axios.get<PokeapiResponse>( url);
        return data;
    }

    async post(url:string,data:any){

    }
    async patch(url:string,data:any){
        
    }
    async delete(url:string,data:any){
        
    }
}