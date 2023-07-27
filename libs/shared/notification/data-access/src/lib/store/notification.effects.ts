import {Injectable} from '@angular/core';
import {Notification} from './notification';
import {NotificationService} from '../notification.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {NotificationActions} from './notification.actions';

@Injectable()
export class NotificationEffects {
  fetchNotifications$ = createEffect(() => this.actions.pipe(
    ofType(NotificationActions.fetchNotifications),
    switchMap(() => this.notificationService.getNotifications()),
    map((notifications: Notification[]) => NotificationActions.setNotifications({notifications: notifications}))
  ));

  constructor(private actions: Actions,
              private notificationService: NotificationService) {
  }
}