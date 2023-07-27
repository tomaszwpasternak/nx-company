import {createFeature, createReducer, on} from '@ngrx/store';
import {CompanyActions} from './company.actions';
import {CompanyState} from './company.state';

const initialState: CompanyState = {
  companies: [],
  currentCompany: null
}

export const companyFeature = createFeature({
  name: 'company',
  reducer: createReducer(
    initialState,
    on(CompanyActions.setCompanies, (state, {companies}) => ({...state, companies})),
    on(CompanyActions.setCurrentCompany, (state, {company}) => ({...state, currentCompany: company}))
  )
})
