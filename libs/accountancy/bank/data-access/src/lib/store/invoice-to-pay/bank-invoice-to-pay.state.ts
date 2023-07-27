import {InvoiceToPay} from './invoice-to-pay';

export interface BankInvoiceToPayState {
  invoiceToPay: InvoiceToPay | null;
  isLoading: boolean;
}