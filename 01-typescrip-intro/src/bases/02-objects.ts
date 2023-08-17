export const pokemonIds=[1,2,30,40,50,66];

pokemonIds.push(+'20');


interface Pokemon {
    id:number;
    name:string;
    // age?:number;
    //age:number|undefined;
    age:number

}



export const bulbsaur:Pokemon ={
    id:54321,
    name:'bulbasur',
    age:5
    
}

export const charmander:Pokemon ={
    id:21,
    name:'picachu',
    age:1
    
}

console.log(bulbsaur);

export const pokemons:Pokemon[]=[];
pokemons.push(bulbsaur,charmander)