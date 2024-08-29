import { IsUUID, IsDecimal } from 'class-validator';

export class CreateValuationDto {
  @IsUUID()
  vehicleId: string;

  @IsDecimal()
  estimatedValue: number;
}
