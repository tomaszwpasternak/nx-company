import {Component, inject, OnInit} from '@angular/core';
import {DashboardMarketingTypeStore, MarketingType} from '@marketing/dashboard/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {LAYOUT_CHART_COLORS} from '@shared/shell/feature';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'marketing-dashboard-marketing-type',
  templateUrl: './marketing-type.component.html',
  styleUrls: ['./marketing-type.component.scss'],
  providers: [DashboardMarketingTypeStore]
})
export class MarketingTypeComponent implements OnInit {
  public marketingTypes$: Observable<MarketingType[]> = this.dashboardMarketingTypeStore.marketingTypes$;
  public isLoading$: Observable<boolean> = this.dashboardMarketingTypeStore.isLoading$;

  public colorScheme: any = {
    domain: inject(LAYOUT_CHART_COLORS)
  };

  constructor(private dashboardMarketingTypeStore: DashboardMarketingTypeStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.dashboardMarketingTypeStore.fetchMarketingTypes(company!.id))
    ).subscribe()
  }
}