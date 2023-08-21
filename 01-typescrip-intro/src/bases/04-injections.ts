//import axios from 'axios';
import { Move, PokeapiResponse } from './interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: PokeApiAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data=await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves[0].move.name );
        
        return data.moves;
    }

}

const pokeApiAxios =new PokeApiAdapter();
const PokeApiFetch= new PokeApiFetchAdapter(); 
export const charmander = new Pokemon( 4, 'Charmander',PokeApiFetch );

charmander.getMoves();