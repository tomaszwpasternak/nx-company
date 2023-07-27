import {Injectable} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {first, map, switchMap} from 'rxjs';
import {CompanyService} from '../company.service';
import {Company} from './company';
import {CompanyActions} from './company.actions';
import {selectCompanies, selectCompaniesById} from './company.selectors';

@Injectable()
export class CompanyEffects {
  fetchCompanies$ = createEffect(() => this.actions.pipe(
    ofType(CompanyActions.fetchCompanies),
    switchMap(() => this.companyService.getCompanies()),
    map((companies: Company[]) => CompanyActions.setCompanies({companies: companies}))
  ));

  setCurrentCompany$ = createEffect(() => this.actions.pipe(
    ofType(CompanyActions.setCompanies),
    map(() => this.activatedRoute.snapshot.queryParams),
    switchMap((params: Params) => {
      if (params['companyId']) {
        return this.store.select(selectCompaniesById(params['companyId'])).pipe(first())
      }
      return this.store.select(selectCompanies).pipe(
        first(),
        map((companies: Company[]) => companies[0])
      );
    }),
    map((company: Company) => CompanyActions.setCurrentCompany({company: company}))
  ))

  constructor(private actions: Actions,
              private companyService: CompanyService,
              private store: Store,
              private activatedRoute: ActivatedRoute) {
  }
}