import {BankHistoryStore, History} from '@accountancy/bank/data-access';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-bank-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: [BankHistoryStore]
})
export class HistoryComponent implements OnInit {
  public histories$: Observable<History[]> = this.bankHistoryStore.histories$;
  public isLoading$: Observable<boolean> = this.bankHistoryStore.isLoading$;

  constructor(private bankHistoryStore: BankHistoryStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.bankHistoryStore.fetchHistories(company!.id))
    ).subscribe();
  }
}