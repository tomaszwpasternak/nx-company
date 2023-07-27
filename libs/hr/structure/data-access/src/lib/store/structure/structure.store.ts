import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {StructureService} from '../../structure.service';
import {StructureState} from './structure.state';
import {Structure} from './structure';

@Injectable()
export class StructureStore extends ComponentStore<StructureState> {
  readonly structure$ = this.select((state) => state.structure);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private structureService: StructureService) {
    super({structure: [], isLoading: true})
  }

  readonly fetchStructure = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.structureService.getStructureByCompanyId(id)),
      tap((structure: Structure[]) => this.setStructure(structure))
    )
  })

  readonly setStructure = this.updater((state, structure: Structure[]) => ({...state, structure, isLoading: false}));
}

