import {Component, inject, OnInit} from '@angular/core';
import {DashboardTargetGroupStore, TargetGroup} from '@marketing/dashboard/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {LAYOUT_CHART_COLORS} from '@shared/shell/feature';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'marketing-dashboard-target-group',
  templateUrl: './target-group.component.html',
  styleUrls: ['./target-group.component.scss'],
  providers: [DashboardTargetGroupStore]
})
export class TargetGroupComponent implements OnInit {
  public targetGroups$: Observable<TargetGroup[]> = this.dashboardTargetGroupStore.targetGroups$;
  public isLoading$: Observable<boolean> = this.dashboardTargetGroupStore.isLoading$;

  public colorScheme: any = {
    domain: inject(LAYOUT_CHART_COLORS)
  };

  constructor(private dashboardTargetGroupStore: DashboardTargetGroupStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.dashboardTargetGroupStore.fetchTargetGroups(company!.id))
    ).subscribe()
  }
}