import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {UserService} from '../user.service';
import {User} from './user';
import {UserActions} from './user.actions';

@Injectable()
export class UserEffects {
  fetchUser$ = createEffect(() => this.actions.pipe(
    ofType(UserActions.fetchUser),
    switchMap(() => this.userService.getUser()),
    map((user: User) => UserActions.setUser({user: user}))
  ))

  constructor(private actions: Actions,
              private userService: UserService) {
  }
}