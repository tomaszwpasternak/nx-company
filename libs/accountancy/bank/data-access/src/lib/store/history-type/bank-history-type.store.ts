import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {BankService} from '../../bank.service';
import {BankHistoryTypeState} from './bank-history-type.state';
import {HistoryType} from './history-type';

@Injectable()
export class BankHistoryTypeStore extends ComponentStore<BankHistoryTypeState> {
  readonly historyTypes$ = this.select((state) => state.historyTypes);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private bankService: BankService) {
    super({historyTypes: [], isLoading: true})
  }

  readonly fetchHistoryTypes = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.bankService.getHistoryTypesByCompanyId(id)),
      tap((historyTypes: HistoryType[]) => this.setHistoryTypes(historyTypes))
    )
  })

  readonly setHistoryTypes = this.updater((state, historyTypes: HistoryType[]) => ({
    ...state,
    historyTypes,
    isLoading: false
  }));
}

