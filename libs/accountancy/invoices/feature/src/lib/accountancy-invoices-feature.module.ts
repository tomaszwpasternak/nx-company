import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UiComponentsModule} from '@shared/ui/components';
import {ClientsComponent} from './clients/clients.component';
import {DaysComponent} from './days/days.component';
import {AmountComponent} from './amount/amount.component';
import {InvoicesListComponent} from './invoices-list/invoices-list.component';
import {InvoicesComponent} from './invoices.component';
import {MoneyComponent} from './money/money.component';

@NgModule({
  declarations: [
    InvoicesComponent,
    AmountComponent,
    ClientsComponent,
    DaysComponent,
    InvoicesListComponent,
    MoneyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
          path: '',
          component: InvoicesComponent
        }
      ]
    ),
    UiComponentsModule
  ],
})
export class AccountancyInvoicesFeatureModule {
}
