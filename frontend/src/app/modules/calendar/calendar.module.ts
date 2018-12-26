import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* * * * * * * * * * *
 * Vendor-components *
 * * * * * * * * * * */
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* * * * * * * * * *
 * Core-Components *
 * * * * * * * * * */

/* * * * * * * * * *
 * Self-components *
 * * * * * * * * * */
import { CalendarComponent } from './calendar.component';
import { CalendarToolbarComponent } from './+calendar-toolbar/calendar-toolbar.component';
import { CalendarWeekViewComponent } from './+calendar-week-view/calendar-week-view.component';


const routes: Routes = [
	{ path: "", component: CalendarComponent }
];
@NgModule({
	declarations: [
		CalendarComponent,
		CalendarToolbarComponent,
		CalendarWeekViewComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
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
