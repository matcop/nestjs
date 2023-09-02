import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

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
    // getCarById(@Param('id', new ParseUUIDPipe({version:'4'})) id: string) {

    console.log(this.carsService.findOneById(id));



    console.log(" con identificador:" + id);

    // throw new Error ('error monitoreo79537750')

    return this.carsService.findOneById(id);

  }

  @Post()
  // @UsePipes(ValidationPipe) 
  CreateCar(@Body() createCarDto: CreateCarDto) {

    //ya no es any 'cual sea' ahora es de tipo CreateCarDto
    //tampoco ser usara body, ya que en especifico se espera una datos del tipo CreateCarDto, algo asi como una instancia.
    // CreateCar(@Body() body: any) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  UpdateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(id,updateCarDto);
  }

  @Delete(':id')
  DeleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);// consumir un servicio para borrar
  }

}



