import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {InvoiceService} from '../../invoice.service';
import {Amount} from './amount';
import {InvoiceAmountState} from './invoice-amount.state';

@Injectable()
export class InvoiceAmountStore extends ComponentStore<InvoiceAmountState> {
  readonly amount$ = this.select((state) => state.amount);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private invoiceService: InvoiceService) {
    super({amount: null, isLoading: true})
  }

  readonly fetchAmount = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.invoiceService.getAmountByCompanyId(id)),
      tap((amount: Amount) => this.setAmount(amount))
    )
  })

  readonly setAmount = this.updater((state, amount: Amount) => ({...state, amount, isLoading: false}));
}

