import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {MarketingService} from '../../marketing.service';
import {DashboardMarketingTypeState} from './dashboard-marketing-type.state';
import {MarketingType} from './marketing-type';

@Injectable()
export class DashboardMarketingTypeStore extends ComponentStore<DashboardMarketingTypeState> {
  readonly marketingTypes$ = this.select((state) => state.marketingTypes);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private marketingService: MarketingService) {
    super({marketingTypes: [], isLoading: true});
  }

  readonly fetchMarketingTypes = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.marketingService.getMarketingTypesByCompanyId(id)),
      tap((marketingTypes: MarketingType[]) => this.setMarketingTypes(marketingTypes))
    )
  })

  readonly setMarketingTypes = this.updater((state, marketingTypes: MarketingType[]) => ({
    ...state,
    marketingTypes,
    isLoading: false
  }));
}