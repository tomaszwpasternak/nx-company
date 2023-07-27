import {Component, OnInit} from '@angular/core';
import {
  CurrentAdvertisement,
  DashboardCurrentAdvertisementStore
} from '@marketing/dashboard/data-access';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {Store} from '@ngrx/store';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'marketing-dashboard-current-advertisement',
  templateUrl: './current-advertisement.component.html',
  styleUrls: ['./current-advertisement.component.scss'],
  providers: [DashboardCurrentAdvertisementStore]
})
export class CurrentAdvertisementComponent implements OnInit {
  public currentAdvertisements$: Observable<CurrentAdvertisement[]> = this.dashboardCurrentAdvertisementStore.currentAdvertisements$;
  public isLoading$: Observable<boolean> = this.dashboardCurrentAdvertisementStore.isLoading$;

  constructor(private dashboardCurrentAdvertisementStore: DashboardCurrentAdvertisementStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.dashboardCurrentAdvertisementStore.fetchCurrentAdvertisements(company!.id))
    ).subscribe()
  }
}