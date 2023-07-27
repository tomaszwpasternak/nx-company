import {CurrentAdvertisement} from './current-advertisement';

export interface DashboardCurrentAdvertisementState {
  currentAdvertisements: CurrentAdvertisement[];
  isLoading: boolean;
}
