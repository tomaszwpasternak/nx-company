import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User, selectUser} from '@shared/user/data-access';

@Component({
  selector: 'shell-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user$: Observable<User | null> = this.store.select(selectUser);

  constructor(private store: Store) {
  }
}