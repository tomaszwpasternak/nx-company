import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';
import {Employee} from '@hr/structure/data-access';
import {StructureEmployeeStore} from '@hr/structure/data-access';

@Component({
  selector: 'hr-structure-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [StructureEmployeeStore]
})
export class EmployeeComponent implements OnInit {
  public employee$: Observable<Employee | null> = this.structureEmployeeStore.employee$;
  public isLoading$: Observable<boolean> = this.structureEmployeeStore.isLoading$;

  constructor(private structureEmployeeStore: StructureEmployeeStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.structureEmployeeStore.fetchEmployee(company!.id))
    ).subscribe()
  }
}