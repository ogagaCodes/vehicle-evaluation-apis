import { IsInt, IsNumber, IsString, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateLoanApplicationDto {
  @IsString()
  @IsNotEmpty()
  applicantName: string;

  @IsString()
  @IsNotEmpty()
  applicantEmail: string;

  @IsString()
  @IsNotEmpty()
  applicantPhone: string;

  @IsInt()
  @Min(300)
  @Max(850)
  creditScore: number;

  @IsInt()
  @Min(1900)
  vehicleYear: number;

  @IsNumber()
  @Min(0)
  vehicleValue: number;

  @IsString()
  @IsNotEmpty()
  loanAmount: string;

  @IsString()
  @IsNotEmpty()
  loanPurpose: string;

  @IsString()
  @IsNotEmpty()
  vehicleVIN: string;

  @IsString()
  @IsNotEmpty()
  vehicleMake: string;

  @IsString()
  @IsNotEmpty()
  vehicleModel: string;
}
