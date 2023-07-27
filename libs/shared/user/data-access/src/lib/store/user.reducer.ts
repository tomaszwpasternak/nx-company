import {createFeature, createReducer, on} from '@ngrx/store';
import {UserActions} from './user.actions';
import {UserState} from './user.state';

const initialState: UserState = {
  user: null
}

export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
    on(UserActions.setUser, (state, {user}) => ({...state, user}))
  )
})
