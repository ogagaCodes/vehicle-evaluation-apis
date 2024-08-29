import { Controller, Param, Post } from '@nestjs/common';
import { ValuationService } from './valuations.service';

@Controller('valuations')
export class ValuationsController {
  constructor(private readonly valuationsService: ValuationService) {}

  @Post(':vin')
  valuate(@Param('vehicleId') vin: string) {
    return this.valuationsService.getVehicleValuation(vin);
  }
}
