import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Balance} from './store/balance/balance';
import {HistoryType} from './store/history-type/history-type';
import {History} from './store/history/history';
import {InvoiceToPay,} from './store/invoice-to-pay/invoice-to-pay';
import {SalaryToPay} from './store/salary-to-pay/salary-to-pay';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private httpClient: HttpClient) {
  }

  getBalanceByCompanyId(companyId: string): Observable<Balance> {
    return this.httpClient.get<Balance>('api/accountancy/bank/company/' + companyId + '/balance')
  }

  getHistoriesByCompanyId(companyId: string): Observable<History[]> {
    return this.httpClient.get<History[]>('api/accountancy/bank/company/' + companyId + '/history');
  }

  getHistoryTypesByCompanyId(companyId: string): Observable<HistoryType[]> {
    return this.httpClient.get<HistoryType[]>('api/accountancy/bank/company/' + companyId + '/history-type');
  }

  getInvoiceToPayByCompanyId(companyId: string): Observable<InvoiceToPay> {
    return this.httpClient.get<InvoiceToPay>('api/accountancy/bank/company/' + companyId + '/invoice');
  }

  getSalaryToPayByCompanyId(companyId: string): Observable<SalaryToPay> {
    return this.httpClient.get<SalaryToPay>('api/accountancy/bank/company/' + companyId + '/salary');
  }
}