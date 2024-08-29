import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanApplication } from './entities/loan.entity';
import { CreateLoanApplicationDto } from './dto/create-loan-application.dto';
import { LoanEligibilityService } from './loan-eligibility.service';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(LoanApplication)
    private readonly loanApplicationRepository: Repository<LoanApplication>,
    private readonly loanEligibilityService: LoanEligibilityService,
  ) {}

  async create(createLoanApplicationDto: CreateLoanApplicationDto): Promise<LoanApplication> {
    const isEligible = this.loanEligibilityService.checkEligibility(createLoanApplicationDto);

    if (!isEligible) {
      throw new BadRequestException('Loan application does not meet eligibility criteria');
    }

    const loanApplication = this.loanApplicationRepository.create(createLoanApplicationDto);
    return this.loanApplicationRepository.save(loanApplication);
  }

  async findAll(): Promise<LoanApplication[]> {
    return this.loanApplicationRepository.find();
  }

  async findOne(id: string): Promise<LoanApplication> {
    const loanApplication = await this.loanApplicationRepository.findOne({
        where: { id: id }
    });
    if (!loanApplication) {
      throw new NotFoundException(`LoanApplication with ID ${id} not found`);
    }
    return loanApplication;
  }

  async updateStatus(id: string, status: string): Promise<LoanApplication> {
    const loanApplication = await this.findOne(id);
    loanApplication.status = status;
    return this.loanApplicationRepository.save(loanApplication);
  }
}
