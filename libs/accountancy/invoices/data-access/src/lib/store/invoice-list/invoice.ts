import {InvoiceStatus} from './invoice-status';

export interface Invoice {
  number: string;
  description: string;
  company: string;
  amount: number;
  status: InvoiceStatus;
  daysLeft: number | null;
}
