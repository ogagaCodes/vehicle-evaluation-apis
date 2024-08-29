import { Injectable } from '@nestjs/common';
import { CreateLoanApplicationDto } from './dto/create-loan-application.dto';

@Injectable()
export class LoanEligibilityService {
  private minCreditScore = 650;
  private maxVehicleAge = 10;
  private minVehicleValue = 5000;

  checkEligibility(loanApplicationDto: CreateLoanApplicationDto): boolean {
    const { creditScore, vehicleYear, vehicleValue } = loanApplicationDto;

    const vehicleAge = new Date().getFullYear() - vehicleYear;

    return (
      creditScore >= this.minCreditScore &&
      vehicleAge <= this.maxVehicleAge &&
      vehicleValue >= this.minVehicleValue
    );
  }
}
