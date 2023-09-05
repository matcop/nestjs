import { Brand } from 'src/brands/entities/brand.entity';
import { Car } from 'src/cars/interface/car.interface';
import {v4 as uuid}from 'uuid';



export const BRAND_SEED:Brand[]=[
    {
        id:uuid(),
        name:'Toyota',
        createdAt:new Date().getTime(),
        updatedAt:new Date().getTime(),
        
    },{
        id:uuid(),
        name:'Volvo',
        createdAt:new Date().getTime(),
        updatedAt:new Date().getTime(),
        
    },
    {
        id:uuid(),
        name:'Renault',
        createdAt:new Date().getTime(),
        updatedAt:new Date().getTime(),
    },
    {
        id:uuid(),
        name:'Jeep',
        createdAt:new Date().getTime(),
        updatedAt:new Date().getTime(),
    },
    {
        id:uuid(),
        name:'Tesla',
        createdAt:new Date().getTime(),
        updatedAt:new Date().getTime(),
    }
]