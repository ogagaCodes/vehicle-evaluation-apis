import { DataSource } from 'typeorm';
import { User } from './modules/users/entities/user.entity';
import { Vehicle } from './modules/vehicles/entities/vehicle.entity';
import { LoanApplication } from '../src/modules/loans/entities/loan.entity';
import { InitialMigration1625811600345 } from './migrations/1625811600345-InitialMigration';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [User, Vehicle, LoanApplication],
  migrations: [InitialMigration1625811600345],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
