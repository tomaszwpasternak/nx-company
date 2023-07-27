import {Component} from '@angular/core';
import {CompanyActions} from '@shared/company/data-access';
import {Store} from '@ngrx/store';
import {UserActions} from '@shared/user/data-access';
import {ThemeService} from '../core/theme/theme.service';

@Component({
  selector: 'shell-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  constructor(private themeService: ThemeService,
              private store: Store) {
    this.themeService.initialize();

    this.store.dispatch(UserActions.fetchUser());
    this.store.dispatch(CompanyActions.fetchCompanies());
  }
}
