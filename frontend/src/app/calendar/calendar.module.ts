import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

/* * * * * *
 * Vendors *
 * * * * * */
// Angular-Calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* * * * * * * * * * * *
 * Individual-mponents *
 * * * * * * * * * * * */
import { CalendarComponent } from './calendar.component';
import { CalendarToolbarComponent } from './calendar-toolbar/calendar-toolbar.component';


const routes: Routes = [
	{ path: "", component: CalendarComponent }
];
@NgModule({
	declarations: [
		CalendarComponent,
		CalendarToolbarComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		HttpClientModule,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory 
		}),
		FontAwesomeModule
	],
	exports: [
		RouterModule
	]
})
export class CalendarLoadModule { }
