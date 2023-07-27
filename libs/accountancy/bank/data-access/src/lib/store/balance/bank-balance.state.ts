import {Balance} from './balance';

export interface BankBalanceState {
  balance: Balance | null;
  isLoading: boolean;
}