import {Balance, BankBalanceStore} from '@accountancy/bank/data-access';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-bank-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  providers: [BankBalanceStore]
})
export class BalanceComponent implements OnInit {
  public balance$: Observable<Balance | null> = this.bankBalanceStore.balance$;
  public isLoading$: Observable<boolean> = this.bankBalanceStore.isLoading$;

  constructor(private bankBalanceStore: BankBalanceStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.bankBalanceStore.fetchBalance(company!.id))
    ).subscribe();
  }
}