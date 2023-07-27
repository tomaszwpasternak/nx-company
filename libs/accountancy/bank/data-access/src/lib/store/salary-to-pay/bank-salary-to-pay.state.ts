import {SalaryToPay} from './salary-to-pay';

export interface BankSalaryToPayState {
  salaryToPay: SalaryToPay | null;
  isLoading: boolean;
}