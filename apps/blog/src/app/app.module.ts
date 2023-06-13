import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {CardModule} from '@brightcoding/card'
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthGuard } from '@brightcoding/users';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    CardModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
