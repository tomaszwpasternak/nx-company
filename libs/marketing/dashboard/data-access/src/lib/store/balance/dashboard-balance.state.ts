import {Balance} from './balance';

export interface DashboardBalanceState {
  balance: Balance | null;
  isLoading: boolean;
}
