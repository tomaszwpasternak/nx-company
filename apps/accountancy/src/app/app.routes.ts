import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'invoices',
    loadChildren: () => import('@accountancy/invoices/feature').then((m) => m.AccountancyInvoicesFeatureModule),
    data: {
      name: 'Invoices',
      description: 'Your invoices',
      icon: 'article'
    }
  },
  /*  {
      path: 'payouts',
      loadChildren: () => import('@company/company-accountancy/feature-payouts').then((m) => m.FeaturePayoutsModule),
      data: {
        name: 'Payouts',
        description: 'Your payouts',
        icon: 'payments'
      }
    },*/
  {
    path: 'bank-account',
    loadChildren: () => import('@accountancy/bank/feature').then((m) => m.AccountancyBankFeatureModule),
    data: {
      name: 'Bank account',
      description: 'Your bank account',
      icon: 'account_balance'
    }
  },
  {
    path: '**',
    redirectTo: 'invoices',
    pathMatch: 'full'
  }
];
