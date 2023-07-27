import {createSelector} from '@ngrx/store';
import {Company} from './company';
import {companyFeature} from './company.reducer';

export const selectCompanies = companyFeature.selectCompanies;
export const selectCompaniesById = (id: string) => createSelector(
  companyFeature.selectCompanies,
  (companies: Company[]) => companies.find((company) => company.id === id)!
);

export const selectCurrentCompany = companyFeature.selectCurrentCompany;
