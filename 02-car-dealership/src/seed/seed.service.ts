import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';
import { PERSONAS_SEED } from './data/personas.seed';
import { PersonasService } from 'src/personas/personas.service';


@Injectable()
export class SeedService {

  constructor(
    private readonly carService: CarsService, 
    private readonly brandsService: BrandsService,
    private readonly personasService: PersonasService,
    
    ) {
  }

  populateDB() {

    this.carService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandWithSeedData(BRAND_SEED);
    this.personasService.fillPersonaWithSeedData(PERSONAS_SEED);
    return 'seed executed';
  }

}
