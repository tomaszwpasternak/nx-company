import { User } from './user';
import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Fetch User': emptyProps(),
    'Set User': props<{ user: User }>()
  }
})
