import {Invoice, InvoiceListStore} from '@accountancy/invoices/data-access';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
  providers: [InvoiceListStore]
})
export class InvoicesListComponent implements OnInit {
  public invoices$: Observable<Invoice[]> = this.invoiceListStore.invoices$;
  public isLoading$: Observable<boolean> = this.invoiceListStore.isLoading$;

  constructor(private invoiceListStore: InvoiceListStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.invoiceListStore.fetchInvoices(company!.id))
    ).subscribe();
  }
}