import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {InvoiceService} from '../../invoice.service';
import {InvoiceMoneyState} from './invoice-money.state';
import {Money} from './money';

@Injectable()
export class InvoiceMoneyStore extends ComponentStore<InvoiceMoneyState> {
  readonly money$ = this.select((state) => state.money);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private invoiceService: InvoiceService) {
    super({money: null, isLoading: true})
  }

  readonly fetchMoney = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.invoiceService.getMoneyByCompanyId(id)),
      tap((money: Money) => this.setMoney(money))
    )
  })

  readonly setMoney = this.updater((state, money: Money) => ({...state, money, isLoading: false}));
}

