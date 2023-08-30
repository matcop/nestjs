import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Res } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }


  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(this.carsService.findOneById(id));



    console.log(" con identificador:" + id);

    // throw new Error ('error monitoreo79537750')

    return this.carsService.findOneById(id);

  }

  @Post()
  CreateCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  UpdateCar( 
    @Param('id', ParseUUIDPipe) id:string,
    @Body() body: any) {
    return body;
  }

  @Delete(':id')
  DeleteCar(@Param('id',ParseUUIDPipe)id:string) {
    return {
      method:'delete',
      id:id
    }
  }

}



