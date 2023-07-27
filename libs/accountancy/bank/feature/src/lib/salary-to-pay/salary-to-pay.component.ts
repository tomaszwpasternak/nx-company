import {BankSalaryToPayStore, SalaryToPay} from '@accountancy/bank/data-access';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-bank-salary-to-pay',
  templateUrl: './salary-to-pay.component.html',
  styleUrls: ['./salary-to-pay.component.scss'],
  providers: [BankSalaryToPayStore]
})
export class SalaryToPayComponent implements OnInit {
  public salaryToPay$: Observable<SalaryToPay | null> = this.bankSalaryToPayStore.salaryToPay$;
  public isLoading$: Observable<boolean> = this.bankSalaryToPayStore.isLoading$;

  constructor(private bankSalaryToPayStore: BankSalaryToPayStore,
              private store: Store,
              private router: Router) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.bankSalaryToPayStore.fetchSalaryToPay(company!.id))
    ).subscribe();
  }

  navigateToPayouts() {
    this.router.navigate(['payouts'])
  }
}