// 1.- FORMA LARGA DE LA CLASE

// export class Pokemon{
//     public id:number;
//     public name:string;
//     constructor(id:number,name:string){
//         this.id=id;
//         this.name=name;

//         console.log('constructor llamado')

//     }
// }

// 2.- FORMA CORTA
// Querido programador:
//
export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string,
    ) { }

    //METODOS FUNCIONES CON ACCESO A LAS PROPIEDADES Y OTROS METODOS

 scream(){
    console.log(`${this.name.toUpperCase()}!!!`)
 }

 speak(){
    console.log(`${this.name} ${this.name}`);
 }
}


export const charmander = new Pokemon(5, 'charmanderx')

console.log(charmander.imageUrl);

charmander.scream();
charmander.speak();
