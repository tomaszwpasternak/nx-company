import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UiComponentsModule} from '@shared/ui/components';
import {PieChartModule} from '@swimlane/ngx-charts';
import {BalanceComponent} from './balance/balance.component';
import {BankComponent} from './bank.component';
import {HistoryTypeComponent} from './history-type/history-type.component';
import {HistoryComponent} from './history/history.component';
import {InvoicesToPayComponent} from './invoices-to-pay/invoices-to-pay.component';
import {SalaryToPayComponent} from './salary-to-pay/salary-to-pay.component';

@NgModule({
  declarations: [
    BankComponent,
    BalanceComponent,
    HistoryComponent,
    HistoryTypeComponent,
    InvoicesToPayComponent,
    SalaryToPayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BankComponent
      }
    ]),
    UiComponentsModule,
    PieChartModule
  ],
})
export class AccountancyBankFeatureModule {
}
