import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UiComponentsModule} from '@shared/ui/components';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BalanceComponent} from './balance/balance.component';
import {CurrentAdvertisementComponent} from './current-advertisement/current-advertisement.component';
import {IncomeOutcomeComponent} from './income-outcome/income-outcome.component';
import {MarketingTypeComponent} from './marketing-type/marketing-type.component';
import {DashboardComponent} from './dashboard.component';
import {TargetGroupComponent} from './target-group/target-group.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BalanceComponent,
    CurrentAdvertisementComponent,
    IncomeOutcomeComponent,
    MarketingTypeComponent,
    TargetGroupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ]),
    UiComponentsModule,
    NgxChartsModule
  ],
})
export class MarketingDashboardFeatureModule {
}
