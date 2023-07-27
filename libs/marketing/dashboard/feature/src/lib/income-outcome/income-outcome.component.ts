import {AfterViewInit, Component, ElementRef, HostListener, inject, OnInit, ViewChild} from '@angular/core';
import {DashboardIncomeOutcomeStore, IncomeOutcome} from '@marketing/dashboard/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {LAYOUT_CHART_COLORS} from '@shared/shell/feature';
import {BarVertical2DComponent} from '@swimlane/ngx-charts';
import {delay, filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'marketing-dashboard-income-outcome',
  templateUrl: './income-outcome.component.html',
  styleUrls: ['./income-outcome.component.scss'],
  providers: [DashboardIncomeOutcomeStore]
})
export class IncomeOutcomeComponent implements OnInit, AfterViewInit {
  @ViewChild('container', {read: ElementRef}) public container!: ElementRef;
  @ViewChild(BarVertical2DComponent) public barVertical2DComponent!: BarVertical2DComponent;

  public incomeOutcomes$: Observable<IncomeOutcome[]> = this.dashboardIncomeOutcomeStore.incomesOutcomes$;
  public isLoading$: Observable<boolean> = this.dashboardIncomeOutcomeStore.isLoading$;
  public view: [number, number] = [0, 0];

  @HostListener('window:resize')
  public onResizeWindow() {
    this.recalculate();
  }

  public colorScheme: any = {
    domain: inject(LAYOUT_CHART_COLORS)
  };

  constructor(private dashboardIncomeOutcomeStore: DashboardIncomeOutcomeStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.dashboardIncomeOutcomeStore.fetchIncomesOutcomes(company!.id))
    ).subscribe();

    this.incomeOutcomes$.pipe(
      delay(200)
    ).subscribe(() => this.recalculate());
  }

  public ngAfterViewInit(): void {
    this.recalculate();
  }

  private recalculate() {
    setTimeout(() => {
      this.view = [this.container.nativeElement.clientWidth, this.container.nativeElement.clientHeight];
    })
  }
}
