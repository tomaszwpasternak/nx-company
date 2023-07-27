import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {StructureService} from '../../structure.service';
import {EmployeeType} from './employee-type';
import {StructureEmployeeTypeState} from './structure-employee-type.state';

@Injectable()
export class StructureEmployeeTypeStore extends ComponentStore<StructureEmployeeTypeState> {
  readonly employeeTypes$ = this.select((state) => state.employeeTypes);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private structureService: StructureService) {
    super({employeeTypes: [], isLoading: true})
  }

  readonly fetchEmployeeTypes = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.structureService.getEmployeeTypesByCompanyId(id)),
      tap((employeeTypes: EmployeeType[]) => this.setEmployeeTypes(employeeTypes))
    )
  })

  readonly setEmployeeTypes = this.updater((state, employeeTypes: EmployeeType[]) => ({
    ...state,
    employeeTypes,
    isLoading: false
  }));
}

