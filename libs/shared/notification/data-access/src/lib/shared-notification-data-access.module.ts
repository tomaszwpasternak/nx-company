import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {NotificationEffects} from './store/notification.effects';
import {notificationFeature} from './store/notification.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(notificationFeature),
    EffectsModule.forFeature([NotificationEffects])
  ],
})
export class SharedNotificationDataAccessModule {
}
