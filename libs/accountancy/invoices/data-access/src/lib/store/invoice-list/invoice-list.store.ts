import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {InvoiceService} from '../../invoice.service';
import {Invoice} from './invoice';
import {InvoiceListState} from './invoice-list.state';

@Injectable()
export class InvoiceListStore extends ComponentStore<InvoiceListState> {
  readonly invoices$ = this.select((state) => state.invoices);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private invoiceService: InvoiceService) {
    super({invoices: [], isLoading: true})
  }

  readonly fetchInvoices = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.invoiceService.getInvoicesByCompanyId(id)),
      tap((invoices: Invoice[]) => this.setInvoices(invoices))
    )
  })

  readonly setInvoices = this.updater((state, invoices: Invoice[]) => ({...state, invoices, isLoading: false}));
}

