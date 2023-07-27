import {History} from './history';

export interface BankHistoryState {
  histories: History[];
  isLoading: boolean;
}