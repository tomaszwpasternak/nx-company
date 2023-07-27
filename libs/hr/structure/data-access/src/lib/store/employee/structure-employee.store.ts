import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {StructureService} from '../../structure.service';
import {Employee} from './employee';
import {StructureEmployeeState} from './structure-employee.state';

@Injectable()
export class StructureEmployeeStore extends ComponentStore<StructureEmployeeState> {
  readonly employee$ = this.select((state) => state.employee);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private structureService: StructureService) {
    super({employee: null, isLoading: true})
  }

  readonly fetchEmployee = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.structureService.getEmployeeByCompanyId(id)),
      tap((employee: Employee) => this.setEmployee(employee))
    )
  })

  readonly setEmployee = this.updater((state, employee: Employee) => ({...state, employee, isLoading: false}));
}

