import {Amount} from './amount';

export interface InvoiceAmountState {
  amount: Amount | null;
  isLoading: boolean;
}