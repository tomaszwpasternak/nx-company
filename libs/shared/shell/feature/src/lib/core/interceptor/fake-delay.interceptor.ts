import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay, Observable} from 'rxjs';

@Injectable()
export class FakeDelayInterceptor implements HttpInterceptor{
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      delay(300 + Math.random() * 300)
    );
  }
}