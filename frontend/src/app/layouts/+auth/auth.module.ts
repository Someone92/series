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
		{ path: 'signin', loadChildren: '@modules/auth/+sign-in/sign-in.module#SignInModule' },
		{ path: 'signup', loadChildren: '@modules/auth/+sign-up/sign-up.module#SignUpModule' },
		{ path: 'forgot', loadChildren: '@modules/auth/+forgot/forgot.module#ForgotModule' }
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