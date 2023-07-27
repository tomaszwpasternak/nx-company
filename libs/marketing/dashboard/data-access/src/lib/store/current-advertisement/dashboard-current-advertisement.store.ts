import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {Observable, switchMap, tap} from 'rxjs';
import {MarketingService} from '../../marketing.service';
import {CurrentAdvertisement} from './current-advertisement';
import {DashboardCurrentAdvertisementState} from './dashboard-current-advertisement.state';

@Injectable()
export class DashboardCurrentAdvertisementStore extends ComponentStore<DashboardCurrentAdvertisementState> {
  readonly currentAdvertisements$ = this.select((state) => state.currentAdvertisements);
  readonly isLoading$ = this.select((state) => state.isLoading);

  constructor(private marketingService: MarketingService) {
    super({currentAdvertisements: [], isLoading: true});
  }

  readonly fetchCurrentAdvertisements = this.effect((companyId$: Observable<string>) => {
    return companyId$.pipe(
      tap(() => this.patchState({isLoading: true})),
      switchMap((id: string) => this.marketingService.getCurrentAdvertisementsByCompanyId(id)),
      tap((currentAdvertisements: CurrentAdvertisement[]) => this.setCurrentAdvertisements(currentAdvertisements))
    )
  })

  readonly setCurrentAdvertisements = this.updater((state, currentAdvertisements: CurrentAdvertisement[]) => ({
    ...state,
    currentAdvertisements,
    isLoading: false
  }));
}