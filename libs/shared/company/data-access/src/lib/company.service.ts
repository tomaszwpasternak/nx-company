import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from './store/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {
  }

  public getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('api/companies');
  }
}

