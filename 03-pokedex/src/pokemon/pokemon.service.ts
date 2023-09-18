import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { Model, isValidObjectId } from 'mongoose';
import { isString } from 'class-validator';
import { error } from 'console';

@Injectable()
export class PokemonService {


  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) { }





  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    // manejo de error 500 no controlado en el backend
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      console.log(pokemon);
      return pokemon;

    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    const pokemon = this.pokemonModel.find();
    return pokemon;
  }

  async findOne(terminoBusqueda: string) {
    let pokemon: Pokemon;

    if (!isNaN(+terminoBusqueda)) {
      pokemon = await this.pokemonModel.findOne({ no: terminoBusqueda });
    }

    //mongo
    if (!pokemon && isValidObjectId(terminoBusqueda)) {
      pokemon = await this.pokemonModel.findById(terminoBusqueda);
    }

    //name
    // if (isString(terminoBusqueda)) {
    //   pokemon = await this.pokemonModel.findOne({ name: terminoBusqueda });
    // }


    if (!pokemon)
      throw new NotFoundException(`Pokemon with id, name or no. "${terminoBusqueda}" no encontrado`);


    return pokemon;
  }

  async update(terminoBusqueda: string, updatePokemonDto: UpdatePokemonDto) {

    try {

      const pokemon = await this.findOne(terminoBusqueda);
      if (updatePokemonDto.name)
        updatePokemonDto.name = updatePokemonDto.name.toLowerCase();

      await pokemon.updateOne(updatePokemonDto);

      //const updatedPokemon=  await pokemon.updateOne(updatePokemonDto, {new:true}); //enviar en tru para que te debuelva el nuevo objeto
      return { ...pokemon.toJSON(), ...updatePokemonDto };

    } catch (error) {
      this.handleExceptions(error);

    }
  }

  async remove(id: string) {

    // const pokemon = await this.findOne(id);
    // await pokemon.deleteOne();
    // return `This action removes a #${id} pokemon`;
    // const result = await this.pokemonModel.findByIdAndDelete(id);
const {deletedCount }= await this.pokemonModel.deleteOne({_id:id});
if(deletedCount===0)
    throw new BadRequestException(`Pokemon with id "${id}" not found `)


    return;
  }


  //manejo de errores
  private handleExceptions(error: any) {

    if (error.code === 11000) {
      throw new BadRequestException(`no se puede actualizar a un registro ya existente ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error);
    throw new InternalServerErrorException(`cant update pok-check server logs`)
  }

}

