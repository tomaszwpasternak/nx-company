import {InjectionToken} from '@angular/core';

export interface LayoutConfig {
  applicationName: string;
  primaryColor: string;
}

export const LAYOUT_CONFIG: InjectionToken<LayoutConfig> = new InjectionToken('LayoutConfig');