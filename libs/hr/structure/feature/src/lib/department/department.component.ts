import {Component, OnInit} from '@angular/core';
import {Department, Employee, StructureDepartmentStore, StructureEmployeeStore} from '@hr/structure/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'hr-structure-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers: [StructureDepartmentStore]
})
export class DepartmentComponent implements OnInit {
  public department$: Observable<Department | null> = this.structureDepartmentStore.department$;
  public isLoading$: Observable<boolean> = this.structureDepartmentStore.isLoading$;

  constructor(private structureDepartmentStore: StructureDepartmentStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.structureDepartmentStore.fetchDepartment(company!.id))
    ).subscribe()
  }

}