import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {User} from './store/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  public getUser(): Observable<User> {
    return this.httpClient.get<User[]>('api/users').pipe(
      map((users: User[]) => users[0])
    );
  }
}

