import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {MarketingService} from '../../marketing.service';
import {IncomeOutcome} from './income-outcome';
import {DashboardIncomeOutcomeState} from './dashboard-income-outcome.state';

@Injectable()
export class DashboardIncomeOutcomeStore extends ComponentStore<DashboardIncomeOutcomeState> {
  readonly incomesOutcomes$ = this.select((state) => state.incomesOutcomes);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private marketingService: MarketingService) {
    super({incomesOutcomes: [], isLoading: true});
  }

  readonly fetchIncomesOutcomes = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      tap(() => this.patchState({incomesOutcomes: []})),
      switchMap((id: string) => this.marketingService.getIncomeOutcomeByCompanyId(id)),
      tap((incomesOutcomes: IncomeOutcome[]) => this.setIncomesOutcomes(incomesOutcomes))
    )
  })

  readonly setIncomesOutcomes = this.updater((state, incomesOutcomes: IncomeOutcome[]) => ({
    ...state,
    incomesOutcomes,
    isLoading: false
  }));
}