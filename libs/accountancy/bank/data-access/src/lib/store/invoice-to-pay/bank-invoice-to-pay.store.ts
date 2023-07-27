import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {BankService} from '../../bank.service';
import {BankInvoiceToPayState} from './bank-invoice-to-pay.state';
import {InvoiceToPay} from './invoice-to-pay';

@Injectable()
export class BankInvoiceToPayStore extends ComponentStore<BankInvoiceToPayState> {
  readonly invoiceToPay$ = this.select((state) => state.invoiceToPay);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private bankService: BankService) {
    super({invoiceToPay: null, isLoading: true})
  }

  readonly fetchInvoiceToPay = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.bankService.getInvoiceToPayByCompanyId(id)),
      tap((invoiceToPay: InvoiceToPay) => this.setInvoiceToPay(invoiceToPay))
    )
  })

  readonly setInvoiceToPay = this.updater((state, invoiceToPay: InvoiceToPay) => ({
    ...state,
    invoiceToPay,
    isLoading: false
  }));
}

