import {Component, inject} from '@angular/core';
import {Route, Router} from '@angular/router';
import {MenuOption} from '@shared/ui/components';
import {ChangeAppService} from '../../core/change-app/change-app.service';
import {LAYOUT_CONFIG} from '../layout-config';
import {NavigationItem} from './navigation-item';

@Component({
  selector: 'shell-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public applicationName = inject(LAYOUT_CONFIG).applicationName;

  navigationItems: NavigationItem[] = this.router.config.filter((el: Route) => el.data && el.data['name']).map((el: Route) => ({
    name: el.data!['name'],
    icon: el.data!['icon'],
    path: el.path,
  } as NavigationItem));

  apps: MenuOption[] = [
    {
      label: 'Human-Resources',
      onClick: () => this.changeAppService.openHR()
    },
    {
      label: 'Production',
      onClick: () => this.changeAppService.openProduction()
    },
    {
      label: 'Marketing',
      onClick: () => this.changeAppService.openMarketing()
    },
    {
      label: 'Accountancy',
      onClick: () => this.changeAppService.openAccountancy()
    }
  ]

  constructor(private router: Router,
              private changeAppService: ChangeAppService) {
  }
}
