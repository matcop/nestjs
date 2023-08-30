import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {
    private cars = [
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
}
