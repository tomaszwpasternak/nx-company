import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Department} from './store/department/department';
import {EmployeeType} from './store/employee-type/employee-type';
import {Employee} from './store/employee/employee';
import {Structure} from './store/structure/structure';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  constructor(private httpClient: HttpClient) {
  }

  getDepartmentByCompanyId(companyId: string): Observable<Department> {
    return this.httpClient.get<Department>('api/hr/structure/company/' + companyId + '/department');
  }

  getEmployeeByCompanyId(companyId: string): Observable<Employee> {
    return this.httpClient.get<Employee>('api/hr/structure/company/' + companyId + '/employee');
  }

  getEmployeeTypesByCompanyId(companyId: string): Observable<EmployeeType[]> {
    return this.httpClient.get<EmployeeType[]>('api/hr/structure/company/' + companyId + '/employee-type');
  }

  getStructureByCompanyId(companyId: string): Observable<Structure[]> {
    return this.httpClient.get<Structure[]>('api/hr/structure/company/' + companyId + '/structure');
  }
}