import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from '../modules/vehicles/entities/vehicle.entity';
import { User } from '../modules/users/entities/user.entity';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async seed() {
    const users = [
      { firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: '123456' },
      { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', password: '123456' },
    ];

    const vehicles = [
      { vin: '1HGCM82633A004352', make: 'Honda', model: 'Accord', year: 2003, mileage: 120000 },
      { vin: '1HGCM82633A004353', make: 'Toyota', model: 'Camry', year: 2010, mileage: 90000 },
    ];

    await this.userRepository.save(users);
    await this.vehicleRepository.save(vehicles);
  }
}
