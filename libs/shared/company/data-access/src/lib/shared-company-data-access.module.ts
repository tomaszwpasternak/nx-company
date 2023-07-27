import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CompanyEffects} from './store/company.effects';
import {companyFeature} from './store/company.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(companyFeature),
    EffectsModule.forFeature([CompanyEffects])
  ]
})
export class SharedCompanyDataAccessModule {
}
