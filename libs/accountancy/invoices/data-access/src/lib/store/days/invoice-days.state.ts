import {Days} from './days';

export interface InvoiceDaysState {
  days: Days | null;
  isLoading: boolean;
}