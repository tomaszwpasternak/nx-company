import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {
  Company,
  CompanyActions,
  selectCompanies,
  selectCompaniesById,
  selectCurrentCompany
} from '@shared/company/data-access';
import {filter, first, map, Observable} from 'rxjs';

@Component({
  selector: 'shell-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent {
  selectedCompanyFormControl = new FormControl<{ label: string, value: any } | undefined>(undefined);

  companyOptions$: Observable<{ label: string, value: any }[]> = this.store.select(selectCompanies).pipe(
    map((companies: Company[]) => companies.map((el) => ({label: el.name, value: el.id})))
  );

  constructor(private store: Store) {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      map((company: Company | null) => company as Company)
    ).subscribe((company: Company) => this.selectedCompanyFormControl.setValue({
      label: company.name,
      value: company.id
    }));
  }

  public companyChanged() {
    this.store.select(selectCompaniesById(this.selectedCompanyFormControl.value!.value)).pipe(
      first()
    ).subscribe((company: Company) => this.store.dispatch(CompanyActions.setCurrentCompany({company})))
  }
}