import {createFeature, createReducer, on} from '@ngrx/store';
import {NotificationActions} from './notification.actions';
import {NotificationState} from './notification.state';

const initialState: NotificationState = {
  notifications: [],
}

export const notificationFeature = createFeature({
  name: 'notification',
  reducer: createReducer(
    initialState,
    on(NotificationActions.setNotifications, (state, {notifications}) => ({...state, notifications})),
  )
})
