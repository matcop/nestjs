import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'TOYOTA',
            model: 'COROLLA'
        },
        {
            id: 2,
            brand: 'HONDA',
            model: 'CIVIC'
        },
        {
            id: 3,
            brand: 'JEEP',
            model: 'CHERORKE'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {

        const car = this.cars.find(car => car.id === id);

        //si el carro no existe, mostramos un error
        // if (!car) {
        //     throw new NotFoundException(`The Car with id ${id} not found`);
        // }

        if (!car) throw new NotFoundException(`The Car with id ${id} not found`);
        

        return car;
    }
}
