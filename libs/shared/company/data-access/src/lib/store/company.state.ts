import { Company } from './company';

export interface CompanyState {
  companies: Company[];
  currentCompany: Company | null;
}