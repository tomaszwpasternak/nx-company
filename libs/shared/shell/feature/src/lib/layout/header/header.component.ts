import {Component} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public description = 'Welcome back!';

  constructor(private router: Router) {
    this.router.getCurrentNavigation();
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      map((activationEnd) => activationEnd as ActivationEnd),
    ).subscribe((activationEnd: ActivationEnd) => this.description = activationEnd.snapshot.data['description'] || 'Welcome back!')
  }
}
