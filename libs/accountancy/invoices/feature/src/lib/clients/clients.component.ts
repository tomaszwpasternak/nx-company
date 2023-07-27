import {Component, OnInit} from '@angular/core';
import {Clients, InvoiceClientsStore} from '@accountancy/invoices/data-access';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {Store} from '@ngrx/store';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-invoices-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [InvoiceClientsStore]
})
export class ClientsComponent implements OnInit {
  public clients$: Observable<Clients | null> = this.invoiceClientsStore.clients$;
  public isLoading$: Observable<boolean> = this.invoiceClientsStore.isLoading$;

  constructor(private invoiceClientsStore: InvoiceClientsStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.invoiceClientsStore.fetchClients(company!.id))
    ).subscribe();
  }
}