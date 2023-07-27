import {Injectable} from '@angular/core';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {environment} from '@env/environment';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ChangeAppService {
  private currentCompanyId: string | null = null;

  constructor(private store: Store) {
    this.store.select(selectCurrentCompany).subscribe((company: Company | null) => this.currentCompanyId = company?.id || null);
  }

  public openHR(route = ''): void {
    window.open(environment.hrUrl + route + this.generateCompanyIdQueryParam(), '_self');
  }

  public openProduction(route = ''): void {
    window.open(environment.productionUrl + route + this.generateCompanyIdQueryParam(), '_self');
  }

  public openMarketing(route = ''): void {
    window.open(environment.marketingUrl + route + this.generateCompanyIdQueryParam(), '_self');
  }

  public openAccountancy(route = ''): void {
    window.open(environment.accountancyUrl + route + this.generateCompanyIdQueryParam(), '_self');
  }

  private generateCompanyIdQueryParam(): string {
    return `?companyId=${this.currentCompanyId}`;
  }
}