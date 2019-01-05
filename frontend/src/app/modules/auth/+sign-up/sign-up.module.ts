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
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
	{ path: "", component: SignUpComponent }
];
@NgModule({
	declarations: [
		SignUpComponent
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
export class SignUpModule { }
