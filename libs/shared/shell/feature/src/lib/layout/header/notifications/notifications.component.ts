import {Component} from '@angular/core';
import {Notification, selectNotifications} from '@shared/notification/data-access';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'shell-notifications',
  templateUrl: 'notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  public unreadNotifications$: Observable<Notification[]> = this.store.select(selectNotifications);

  constructor(private store: Store) {
  }
}