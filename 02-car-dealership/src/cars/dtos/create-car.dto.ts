import { IsString, MinLength } from "class-validator";

//tambien podria ser un a interface pero un DTO me permitira hacer validaciones de la data 
export class CreateCarDto{
    // @IsString({message:`se esperaba el dato <brand>`})
    @IsString()
    readonly brand:string;
   
    @IsString()
    @MinLength(3)
    readonly model:string;
}