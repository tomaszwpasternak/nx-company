import { Route } from '@angular/router';

export const appRoutes: Route[] = [
/*  { // TODO: implement this routes
    path: '',
    loadChildren: (): any => null,
    data: {
      name: 'Resources',
      icon: 'precision_manufacturing'
    }
  },
  {
    path: '',
    loadChildren: (): any => null,
    data: {
      name: 'Production',
      icon: 'inventory_2'
    }
  },
  {
    path: '',
    loadChildren: (): any => null,
    data: {
      name: 'Delivery',
      icon: 'local_shipping'
    }
  },*/
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
