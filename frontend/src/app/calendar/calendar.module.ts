import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { CalendarComponent } from './calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


const routes: Routes = [
	{ path: "", component: CalendarComponent }
];
@NgModule({
	declarations: [
		CalendarComponent,

	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		HttpClientModule,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory 
		})
	],
	exports: [
		RouterModule
	]
})
export class CalendarLoadModule { }
