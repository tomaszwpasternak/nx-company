import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {InvoiceService} from '../../invoice.service';
import {Days} from './days';
import {InvoiceDaysState} from './invoice-days.state';

@Injectable()
export class InvoiceDaysStore extends ComponentStore<InvoiceDaysState> {
  readonly days$ = this.select((state) => state.days);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private invoiceService: InvoiceService) {
    super({days: null, isLoading: true})
  }

  readonly fetchDays = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.invoiceService.getDaysByCompanyId(id)),
      tap((days: Days) => this.setDays(days))
    )
  })

  readonly setDays = this.updater((state, days: Days) => ({...state, days, isLoading: false}));
}

