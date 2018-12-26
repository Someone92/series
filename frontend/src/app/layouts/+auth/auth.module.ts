import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/* * * * * * * * * * *
 * Vendor-components *
 * * * * * * * * * * */

/* * * * * * * * * *
 * Core-Components *
 * * * * * * * * * */

/* * * * * * * * * *
 * Self-components *
 * * * * * * * * * */
import { AuthComponent } from "./auth.component";



export const routes: Routes = [
	{ path: '', redirectTo: 'signin' },
	{ path: '', component: AuthComponent, children: [
		{ path: 'signin', loadChildren: '@core/auth/+sign-in/sign-in.module#SignInModule' }
	]}
];
@NgModule({
	declarations: [
		AuthComponent
	],
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AuthModule { }