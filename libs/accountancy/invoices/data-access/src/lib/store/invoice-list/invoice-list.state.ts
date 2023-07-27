import {Invoice} from './invoice';

export interface InvoiceListState {
  invoices: Invoice[];
  isLoading: boolean;
}