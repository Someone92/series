import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
	{ path: "", component: SignInComponent }
];
@NgModule({
	declarations: [
		SignInComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FontAwesomeModule,
		ReactiveFormsModule
	],
	exports: [
		RouterModule
	]
})
export class SignInModule { }
