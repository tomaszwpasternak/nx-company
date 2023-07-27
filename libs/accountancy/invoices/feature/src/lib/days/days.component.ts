import {Days, InvoiceDaysStore} from '@accountancy/invoices/data-access';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-invoices-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
  providers: [InvoiceDaysStore]
})
export class DaysComponent implements OnInit {
  public days$: Observable<Days | null> = this.invoiceDaysStore.days$;
  public isLoading$: Observable<boolean> = this.invoiceDaysStore.isLoading$;

  constructor(private invoiceDaysStore: InvoiceDaysStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.invoiceDaysStore.fetchDays(company!.id))
    ).subscribe();
  }
}