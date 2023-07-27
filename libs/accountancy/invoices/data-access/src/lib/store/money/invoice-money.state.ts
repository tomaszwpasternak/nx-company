import {Money} from './money';

export interface InvoiceMoneyState {
  money: Money | null;
  isLoading: boolean;
}