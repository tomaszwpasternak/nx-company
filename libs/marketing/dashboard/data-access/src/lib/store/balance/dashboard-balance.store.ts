import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {MarketingService} from '../../marketing.service';
import {Balance} from './balance';
import {DashboardBalanceState} from './dashboard-balance.state';

@Injectable()
export class DashboardBalanceStore extends ComponentStore<DashboardBalanceState> {
  readonly balance$ = this.select((state) => state.balance);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private marketingService: MarketingService) {
    super({balance: null, isLoading: true});
  }

  readonly fetchBalance = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.marketingService.getBalanceByCompanyId(id)),
      tap((balance: Balance) => this.setBalance(balance))
    )
  })

  readonly setBalance = this.updater((state, balance: Balance) => ({...state, balance, isLoading: false}));
}