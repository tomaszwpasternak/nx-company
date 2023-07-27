import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {BankService} from '../../bank.service';
import {BankHistoryState} from './bank-history.state';
import {History} from './history';

@Injectable()
export class BankHistoryStore extends ComponentStore<BankHistoryState> {
  readonly histories$ = this.select((state) => state.histories);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private bankService: BankService) {
    super({histories: [], isLoading: true})
  }

  readonly fetchHistories = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.bankService.getHistoriesByCompanyId(id)),
      tap((histories: History[]) => this.setHistories(histories))
    )
  })

  readonly setHistories = this.updater((state, histories: History[]) => ({...state, histories, isLoading: false}));
}

