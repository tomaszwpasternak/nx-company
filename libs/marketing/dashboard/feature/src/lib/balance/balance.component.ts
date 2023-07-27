import {Component, OnInit} from '@angular/core';
import {Balance, DashboardBalanceStore} from '@marketing/dashboard/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {ChangeAppService} from '@shared/shell/feature';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'marketing-dashboard-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  providers: [DashboardBalanceStore]
})
export class BalanceComponent implements OnInit {
  public balance$: Observable<Balance | null> = this.dashboardBalanceStore.balance$;
  public isLoading$: Observable<boolean> = this.dashboardBalanceStore.isLoading$;

  constructor(private dashboardBalanceStore: DashboardBalanceStore,
              private store: Store,
              private changeAppService: ChangeAppService) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.dashboardBalanceStore.fetchBalance(company!.id))
    ).subscribe()
  }

  navigateToAccountancy() {
    this.changeAppService.openAccountancy('/bank-account');
  }
}