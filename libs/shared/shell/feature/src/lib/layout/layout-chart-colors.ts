import {InjectionToken} from '@angular/core';

export interface LayoutChartColors {
  colors: string[];
}

export const LAYOUT_CHART_COLORS: InjectionToken<LayoutChartColors> = new InjectionToken('LayoutChartColors');
