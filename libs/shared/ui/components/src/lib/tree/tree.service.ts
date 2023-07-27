import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class TreeService {
  public expandAll$ = new Subject<void>();
  public collapseAll$ = new Subject<void>();

  public shouldBeExpanded = true;

  public expandAll() {
    this.shouldBeExpanded = true;
    this.expandAll$.next();
  }

  public collapseAll() {
    this.shouldBeExpanded = false;
    this.collapseAll$.next();
  }
}