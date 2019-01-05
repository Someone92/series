import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* * * * * * * * * * *
 * Vendor-components *
 * * * * * * * * * * */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* * * * * * * * * *
 * Core-Components *
 * * * * * * * * * */

/* * * * * * * * * *
 * Self-components *
 * * * * * * * * * */
import { ForgotComponent } from './forgot.component';

const routes: Routes = [
	{ path: "", component: ForgotComponent }
];
@NgModule({
	declarations: [
		ForgotComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FontAwesomeModule
	],
	exports: [
		RouterModule
	]
})
export class ForgotModule { }
