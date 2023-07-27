import {Amount, InvoiceAmountStore} from '@accountancy/invoices/data-access';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-invoices-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss'],
  providers: [InvoiceAmountStore]
})
export class AmountComponent implements OnInit {
  public amount$: Observable<Amount | null> = this.invoiceAmountStore.amount$;
  public isLoading$: Observable<boolean> = this.invoiceAmountStore.isLoading$;

  constructor(private invoiceAmountStore: InvoiceAmountStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.invoiceAmountStore.fetchAmount(company!.id))
    ).subscribe();
  }
}