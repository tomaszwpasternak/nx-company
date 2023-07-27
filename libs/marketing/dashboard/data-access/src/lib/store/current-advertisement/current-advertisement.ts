import {ThemeColor} from '@shared/ui/theme';

export interface CurrentAdvertisement {
  id: string;
  name: string;
  group: string;
  icon: string;
  type: ThemeColor;
  profit: string;
  monthlyProfit: number;
  monthlyLoss: number;
  startDate: string | null;
  endDate: string | null;
}
