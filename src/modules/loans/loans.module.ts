import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanApplication } from './entities/loan.entity';
import { LoansService } from './loans.service';
import { LoansController } from './loans.controllers';
import { LoanEligibilityService } from './loan-eligibility.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanApplication])],
  controllers: [LoansController],
  providers: [LoansService, LoanEligibilityService],
})
export class LoansModule {}
