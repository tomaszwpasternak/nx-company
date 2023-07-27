import {InvoiceMoneyStore, Money} from '@accountancy/invoices/data-access';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-invoices-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss'],
  providers: [InvoiceMoneyStore]
})
export class MoneyComponent implements OnInit {
  public money$: Observable<Money | null> = this.invoiceMoneyStore.money$;
  public isLoading$: Observable<boolean> = this.invoiceMoneyStore.isLoading$;

  constructor(private invoiceMoneyStore: InvoiceMoneyStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.invoiceMoneyStore.fetchMoney(company!.id))
    ).subscribe();
  }
}