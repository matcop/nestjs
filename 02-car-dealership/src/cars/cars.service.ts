import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interface/car.interface';

import { UpdateCarDto, CreateCarDto } from './dtos';


@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'TOYOTA',
            model: 'COROLLA'
        },
        {
            id: uuid(),
            brand: 'HONDA',
            model: 'CIVIC'
        },
        {
            id: uuid(),
            brand: 'JEEP',
            model: 'CHERORKE'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);

        //si el carro no existe, mostramos un error
        // if (!car) {
        //     throw new NotFoundException(`The Car with id ${id} not found`);
        // }

        if (!car) throw new NotFoundException(`The Car with id ${id} not found`);


        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }


    //OPTION 1 PARA CREAR
    // create(createCarDto:CreateCarDto){
    //     const car:Car={
    //         id: uuid(),
    //         brand: createCarDto.brand,
    //         model: createCarDto.model,
    //     }

    //     return car;
    // }
    //OPTION 2
    // create({model,brand}:CreateCarDto){//usamos la desestructuracion
    //     const car:Car={
    //         id: uuid(),
    //         brand,
    //         model,
    //     }

    //     return car;
    // }

    update(id: string, updateCarDto: UpdateCarDto) {
        //1ro. verificamos el id usando la funcion findOneById
        let carDB = this.findOneById(id); // si el id no se ecuentra se encargara la validacion de findbyId.


        if (updateCarDto.id && updateCarDto.id != id)
            throw new BadRequestException('el id de car no es valido');


        //si pasa la anterior linea proseguira actualizando los datos.
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB, ...updateCarDto, id
                }
                return carDB;
            }
            return car;
        })
        return carDB;//devolver carro actualizado
    }

    delete(id: string) {
        const carsdbout = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);
        return this.cars;
    }

}
