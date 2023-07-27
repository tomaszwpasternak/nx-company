import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ShellModule} from '@shared/shell/feature';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking', useHash: true}),
    ShellModule.forRoot({
      applicationName: 'Accountancy',
      primaryColor: '#c2a8f6'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
