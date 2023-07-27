import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('@marketing/dashboard/feature').then((m) => m.MarketingDashboardFeatureModule),
    data: {
      name: 'Dashboard',
      description: 'Your marketing',
      icon: 'show_chart'
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
