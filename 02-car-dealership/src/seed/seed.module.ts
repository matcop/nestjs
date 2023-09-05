import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';
import { PersonasModule } from 'src/personas/personas.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[CarsModule,BrandsModule,PersonasModule]
})
export class SeedModule {}
