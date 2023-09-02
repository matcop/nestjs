import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [CarsModule, BrandsModule, PersonasModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
