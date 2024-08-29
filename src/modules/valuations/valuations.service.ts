import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class ValuationService {
  private rapidApiKey: string;
  private rapidApiUrl: string;
  private rapidApiHost: string;
  private baseVehicleValue: number;
  private depreciationRate: number;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.rapidApiKey = this.configService.get<string>('RAPIDAPI_KEY');
    this.rapidApiUrl = this.configService.get<string>('RAPIDAPI_URL');
    this.rapidApiHost = this.configService.get<string>('RAPIDAPI_HOST');
    this.baseVehicleValue = this.configService.get<number>('BASE_VEHICLE_VALUE');
    this.depreciationRate = this.configService.get<number>('DEPRECIATION_RATE');
  }

  async getVehicleValuation(vin: string): Promise<any> {
    const url = `${this.rapidApiUrl}?vin=${vin}`;

    const response = await this.httpService
      .get(url, {
        headers: {
          'X-RapidAPI-Key': this.rapidApiKey,
          'X-RapidAPI-Host': this.rapidApiHost,
        },
      })
      .toPromise();

    const vehicleData = this.mapToVehicleEntity(response.data);
    const estimatedValue = this.simulateValuation(vehicleData.year);

    vehicleData.estimatedValue = estimatedValue;

    return vehicleData;
  }

  private mapToVehicleEntity(apiData: any): any {
    return {
      vin: apiData.vin,
      make: apiData.make,
      model: apiData.model,
      year: apiData.year,
      mileage: apiData.mileage || 0, // Assuming mileage is provided, if not, set to 0
    };
  }

  private simulateValuation(year: number): number {
    const yearsOld = new Date().getFullYear() - year;
    return this.baseVehicleValue * Math.pow(1 - this.depreciationRate, yearsOld);
  }
}
