import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Valuation } from './entities/valuation.entity';
import { Vehicle } from '../vehicles/entities/vehicle.entity';
import { ValuationService } from './valuations.service';
import { ValuationsController } from './valuations.controllers';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Valuation, Vehicle])],
  controllers: [ValuationsController],
  providers: [ValuationService],
  exports: [ValuationService],
})
export class ValuationsModule {}
