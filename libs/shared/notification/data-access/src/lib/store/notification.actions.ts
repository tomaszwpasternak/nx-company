import { Notification } from './notification';
import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const NotificationActions = createActionGroup({
  source: 'Notification',
  events: {
    'Fetch Notifications': emptyProps(),
    'Set Notifications': props<{notifications: Notification[]}>(),
  }
})
