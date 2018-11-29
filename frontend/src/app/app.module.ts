import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* * * * * *
 * Vendors *
 * * * * * */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* * * * * * * * * *
 * Core-components *
 * * * * * * * * * */
import { NavComponent } from '@core/nav/nav.component';
import { FooterComponent } from '@core/footer/footer.component';

/* * * * * * * * * * * * *
 * Individual-components *
 * * * * * * * * * * * * */

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
