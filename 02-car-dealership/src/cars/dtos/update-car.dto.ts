import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

//tambien podria ser un a interface pero un DTO me permitira hacer validaciones de la data 
export class UpdateCarDto{
    
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    // @IsString({message:`se esperaba el dato <brand>`})
    @IsString()
    @IsOptional()
    readonly brand?:string;
   
    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model?:string;
}