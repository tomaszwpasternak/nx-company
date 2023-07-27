import {BankHistoryTypeStore, HistoryType} from '@accountancy/bank/data-access';
import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {LAYOUT_CHART_COLORS} from '@shared/shell/feature';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'accountancy-bank-history-type',
  templateUrl: './history-type.component.html',
  styleUrls: ['./history-type.component.scss'],
  providers: [BankHistoryTypeStore]
})
export class HistoryTypeComponent implements OnInit {
  public historyTypes$: Observable<HistoryType[]> = this.bankHistoryTypeStore.historyTypes$;
  public isLoading$: Observable<boolean> = this.bankHistoryTypeStore.isLoading$;

  public colorScheme: any = {
    domain: inject(LAYOUT_CHART_COLORS)
  };

  constructor(private bankHistoryTypeStore: BankHistoryTypeStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.bankHistoryTypeStore.fetchHistoryTypes(company!.id))
    ).subscribe();
  }
}