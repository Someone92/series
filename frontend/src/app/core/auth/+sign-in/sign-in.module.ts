import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* * * * * * * * * * *
 * Vendor-components *
 * * * * * * * * * * */

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
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class SignInModule { }
