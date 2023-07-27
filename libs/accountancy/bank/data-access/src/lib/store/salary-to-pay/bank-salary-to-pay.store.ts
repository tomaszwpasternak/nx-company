import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {BankService} from '../../bank.service';
import {BankSalaryToPayState} from './bank-salary-to-pay.state';
import {SalaryToPay} from './salary-to-pay';

@Injectable()
export class BankSalaryToPayStore extends ComponentStore<BankSalaryToPayState> {
  readonly salaryToPay$ = this.select((state) => state.salaryToPay);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private bankService: BankService) {
    super({salaryToPay: null, isLoading: true})
  }

  readonly fetchSalaryToPay = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.bankService.getSalaryToPayByCompanyId(id)),
      tap((salaryToPay: SalaryToPay) => this.setSalaryToPay(salaryToPay))
    )
  })

  readonly setSalaryToPay = this.updater((state, salaryToPay: SalaryToPay) => ({...state, salaryToPay, isLoading: false}));
}

