import {Clients} from './clients';

export interface InvoiceClientsState {
  clients: Clients | null;
  isLoading: boolean;
}