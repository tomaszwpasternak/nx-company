import {Component, inject, OnInit} from '@angular/core';
import {StructureEmployeeStore, StructureEmployeeTypeStore} from '@hr/structure/data-access';
import {DashboardMarketingTypeStore, MarketingType} from '@marketing/dashboard/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {LAYOUT_CHART_COLORS} from '@shared/shell/feature';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'hr-structure-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss'],
  providers: [StructureEmployeeTypeStore]
})
export class EmployeeTypeComponent implements OnInit {
  public employeeTypes$: Observable<MarketingType[]> = this.structureEmployeeTypeStore.employeeTypes$;
  public isLoading$: Observable<boolean> = this.structureEmployeeTypeStore.isLoading$;

  public colorScheme: any = {
    domain: inject(LAYOUT_CHART_COLORS)
  };

  constructor(private structureEmployeeTypeStore: StructureEmployeeTypeStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.structureEmployeeTypeStore.fetchEmployeeTypes(company!.id))
    ).subscribe()
  }
}