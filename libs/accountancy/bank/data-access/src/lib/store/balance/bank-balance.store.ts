import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {BankService} from '../../bank.service';
import {Balance} from './balance';
import {BankBalanceState} from './bank-balance.state';

@Injectable()
export class BankBalanceStore extends ComponentStore<BankBalanceState> {
  readonly balance$ = this.select((state) => state.balance);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private bankService: BankService) {
    super({balance: null, isLoading: true})
  }

  readonly fetchBalance = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.bankService.getBalanceByCompanyId(id)),
      tap((balance: Balance) => this.setBalance(balance))
    )
  })

  readonly setBalance = this.updater((state, balance: Balance) => ({...state, balance, isLoading: false}));
}

