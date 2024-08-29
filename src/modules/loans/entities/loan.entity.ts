import { User } from 'src/modules/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity('loan_applications')
export class LoanApplication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  applicantName: string;

  @Column()
  applicantEmail: string;

  @Column()
  applicantPhone: string;

  @Column('int')
  creditScore: number;

  @Column('int')
  vehicleYear: number;

  @Column('decimal', { precision: 10, scale: 2 })
  vehicleValue: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  status: string;

  @Column()
  vehicleVIN: string;

  @Column()
  vehicleMake: string;

  @Column()
  vehicleModel: string;

  @ManyToOne(() => User, (user) => user.loanApplications)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
