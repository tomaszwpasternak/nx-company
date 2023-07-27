import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {MarketingService} from '../../marketing.service';
import {DashboardTargetGroupState} from './dashboard-target-group.state';
import {TargetGroup} from './target-group';

@Injectable()
export class DashboardTargetGroupStore extends ComponentStore<DashboardTargetGroupState> {
  readonly targetGroups$ = this.select((state) => state.targetGroups);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private marketingService: MarketingService) {
    super({targetGroups: [], isLoading: false});
  }

  readonly fetchTargetGroups = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      tap(() => this.patchState({targetGroups: []})),
      switchMap((id: string) => this.marketingService.getTargetGroupsByCompanyId(id)),
      tap((targetGroups: TargetGroup[]) => this.setTargetGroups(targetGroups))
    )
  })

  readonly setTargetGroups = this.updater((state, targetGroups: TargetGroup[]) => ({
    ...state,
    targetGroups,
    isLoading: false
  }));
}