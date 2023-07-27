import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'structure',
    loadChildren: (): any => import('@hr/structure/feature').then((m) => m.HrStructureFeatureModule),
    data: {
      name: 'Structure',
      description: "Company structure",
      icon: 'account_tree'
    }
  },
/*  { TODO: add that route
    path: 'processes',
    loadChildren: (): any => null,
    data: {
      name: 'Processes',
      icon: 'fork_right'
    }
  },*/
  {
    path: '**',
    redirectTo: 'structure',
    pathMatch: 'full'
  }
];
