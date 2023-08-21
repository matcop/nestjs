import axios from "axios";
//import { PokeapiResponse } from "../bases/interfaces/pokeapi-response.interface";

//adaptar una funcionalidad externa de terceros a mi codigo

export class PokeApiFetchAdapter{
    async get<T>(url:string):Promise<T>{
        const resp = await fetch(url);
        const data:T= await resp.json();

        return data;
    }
}

export class PokeApiAdapter{

private readonly axios= axios;
    async get<T>(url:string):Promise<T>{
        const { data } = await this.axios.get<T>( url);
        return data;
    }

    async post(url:string,data:any){

    }
    async patch(url:string,data:any){
        
    }
    async delete(url:string,data:any){
        
    }
}