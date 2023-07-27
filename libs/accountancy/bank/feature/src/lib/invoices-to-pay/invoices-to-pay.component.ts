import {BankInvoiceToPayStore, InvoiceToPay} from '@accountancy/bank/data-access';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-bank-invoices-to-pay',
  templateUrl: './invoices-to-pay.component.html',
  styleUrls: ['./invoices-to-pay.component.scss'],
  providers: [BankInvoiceToPayStore]
})
export class InvoicesToPayComponent implements OnInit {
  public invoiceToPay$: Observable<InvoiceToPay | null> = this.bankInvoiceToPayStore.invoiceToPay$;
  public isLoading$: Observable<boolean> = this.bankInvoiceToPayStore.isLoading$;

  constructor(private bankInvoiceToPayStore: BankInvoiceToPayStore,
              private store: Store,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.bankInvoiceToPayStore.fetchInvoiceToPay(company!.id))
    ).subscribe();
  }

  navigateToInvoices() {
    this.router.navigate(['invoices']);
  }
}