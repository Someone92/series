import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: "", loadChildren: '@layouts/+main/main.module#MainModule' },
	{ path: "auth", loadChildren: '@layouts/+auth/auth.module#AuthModule' }
];

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
