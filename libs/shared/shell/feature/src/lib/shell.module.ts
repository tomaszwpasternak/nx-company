import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {isDevMode, ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SharedCompanyDataAccessModule} from '@shared/company/data-access';
import {SharedNotificationDataAccessModule} from '@shared/notification/data-access';
import {UiComponentsModule} from '@shared/ui/components';
import {SharedUserDataAccessModule} from '@shared/user/data-access';
import {FakeDelayInterceptor} from './core/interceptor/fake-delay.interceptor';
import {JsonInterceptor} from './core/interceptor/json.interceptor';
import {CompanyComponent} from './layout/header/company/company.component';
import {HeaderComponent} from './layout/header/header.component';
import {NotificationsComponent} from './layout/header/notifications/notifications.component';
import {UserComponent} from './layout/header/user/user.component';
import {LAYOUT_CHART_COLORS} from './layout/layout-chart-colors';
import {LAYOUT_CONFIG, LayoutConfig} from './layout/layout-config';
import {LayoutComponent} from './layout/layout.component';
import {NavigationComponent} from './layout/navigation/navigation.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    CompanyComponent,
    NotificationsComponent,
    UserComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiComponentsModule,
    SharedUserDataAccessModule,
    SharedCompanyDataAccessModule,
    SharedNotificationDataAccessModule,
    RouterModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeDelayInterceptor,
      multi: true,
    }
  ],
  exports: [LayoutComponent],
})
export class ShellModule {
  public static forRoot(layoutConfig: LayoutConfig): ModuleWithProviders<ShellModule> {
    return {
      ngModule: ShellModule,
      providers: [
        {
          provide: LAYOUT_CONFIG,
          useValue: layoutConfig
        },
        {
          provide: LAYOUT_CHART_COLORS,
          useValue: [
            layoutConfig.primaryColor,
            '#F26419',
            '#33b6d0',
            '#662efa',
            '#FA2ED1'
          ]
        }
      ]
    }
  }
}
