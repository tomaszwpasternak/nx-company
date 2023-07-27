import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {StructureService} from '../../structure.service';
import {Department} from './department';
import {StructureDepartmentState} from './structure-department.state';

@Injectable()
export class StructureDepartmentStore extends ComponentStore<StructureDepartmentState> {
  readonly department$ = this.select((state) => state.department);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private structureService: StructureService) {
    super({department: null, isLoading: true})
  }

  readonly fetchDepartment = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.structureService.getDepartmentByCompanyId(id)),
      tap((department: Department) => this.setDepartment(department))
    )
  })

  readonly setDepartment = this.updater((state, department: Department) => ({...state, department, isLoading: false}));
}

