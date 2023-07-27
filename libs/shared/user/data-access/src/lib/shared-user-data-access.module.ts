import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {UserEffects} from './store/user.effects';
import {userFeature} from './store/user.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(userFeature),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class SharedUserDataAccessModule {
}
