import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  
constructor(
  private readonly carsService:CarsService
){}


  @Get()
  getAllCars() {
    return this.carsService.findAll(); 
  }

  @Get(':id')
  getCarById( @Param('id') id:string ){
    console.log(this.carsService.findOneById(+id));

    
    
      console.log(" con identificador:"+ id);

    return this.carsService.findOneById(+id);
   
  }
}
