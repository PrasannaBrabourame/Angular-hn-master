/* Angular modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Third-party modules */

/* App modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './shared/services/services.module';

/* Root component */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ServicesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
