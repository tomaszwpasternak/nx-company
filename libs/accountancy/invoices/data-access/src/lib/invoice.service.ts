import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Clients} from './store/clients/clients';
import {Days} from './store/days/days';
import {Amount} from './store/amount/amount';
import {Invoice} from './store/invoice-list/invoice';
import {Money} from './store/money/money';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private httpClient: HttpClient) {
  }

  getAmountByCompanyId(companyId: string): Observable<Amount> {
    return this.httpClient.get<Amount>('api/accountancy/invoice/company/' + companyId + '/amount');
  }

  getClientsByCompanyId(companyId: string): Observable<Clients> {
    return this.httpClient.get<Clients>('api/accountancy/invoice/company/' + companyId + '/clients')
  }

  getDaysByCompanyId(companyId: string): Observable<Days> {
    return this.httpClient.get<Days>('api/accountancy/invoice/company/' + companyId + '/days');
  }

  getInvoicesByCompanyId(companyId: string): Observable<Invoice[]> {
    return this.httpClient.get<Invoice[]>('api/accountancy/invoice/company/' + companyId + '/invoices');
  }

  getMoneyByCompanyId(companyId: string): Observable<Money> {
    return this.httpClient.get<Money>('api/accountancy/invoice/company/' + companyId + '/money');
  }
}