import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Notification} from './store/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private httpClient: HttpClient) {
  }

  public getNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>('api/notifications');
  }
}