import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {InvoiceService} from '../../invoice.service';
import {Clients} from './clients';
import {InvoiceClientsState} from './invoice-clients.state';

@Injectable()
export class InvoiceClientsStore extends ComponentStore<InvoiceClientsState> {
  readonly clients$ = this.select((state) => state.clients);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private invoiceService: InvoiceService) {
    super({clients: null, isLoading: true})
  }

  readonly fetchClients = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.invoiceService.getClientsByCompanyId(id)),
      tap((clients: Clients) => this.setClients(clients))
    )
  })

  readonly setClients = this.updater((state, clients: Clients) => ({...state, clients, isLoading: false}));
}

