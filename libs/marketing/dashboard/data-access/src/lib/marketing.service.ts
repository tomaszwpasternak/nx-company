import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Balance} from './store/balance/balance';
import {CurrentAdvertisement} from './store/current-advertisement/current-advertisement';
import {IncomeOutcome} from './store/income-outcome/income-outcome';
import {MarketingType} from './store/marketing-type/marketing-type';
import {TargetGroup} from './store/target-group/target-group';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {
  constructor(private httpClient: HttpClient) {
  }

  public getBalanceByCompanyId(companyId: string): Observable<Balance> {
    return this.httpClient.get<Balance>(`api/marketing/dashboard/company/${companyId}/balance`)
  }

  public getCurrentAdvertisementsByCompanyId(companyId: string): Observable<CurrentAdvertisement[]> {
    return this.httpClient.get<CurrentAdvertisement[]>(`api/marketing/dashboard/company/${companyId}/current-advertisement`)
  }

  public getIncomeOutcomeByCompanyId(companyId: string): Observable<IncomeOutcome[]> {
    return this.httpClient.get<IncomeOutcome[]>(`api/marketing/dashboard/company/${companyId}/income-outcome`)
  }

  public getMarketingTypesByCompanyId(companyId: string): Observable<MarketingType[]> {
    return this.httpClient.get<MarketingType[]>(`api/marketing/dashboard/company/${companyId}/marketing-type`)
  }

  public getTargetGroupsByCompanyId(companyId: string): Observable<TargetGroup[]> {
    return this.httpClient.get<TargetGroup[]>(`api/marketing/dashboard/company/${companyId}/target-group`)
  }
}
