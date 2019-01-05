import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

/* * * * * * * * * * *
 * Vendor-components *
 * * * * * * * * * * */
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

/* * * * * * * * * *
 * Core-Components *
 * * * * * * * * * */
import { NavComponent } from "@core/nav/nav.component";
import { FooterComponent } from "@core/footer/footer.component";

/* * * * * * * * * *
 * Self-components *
 * * * * * * * * * */
import { MainComponent } from "./main.component";

export const routes: Routes = [
	{ path: '', component: MainComponent, children: [
		{ path: '', loadChildren: '@modules/calendar/calendar.module#CalendarLoadModule' }
	]}
];
@NgModule({
	declarations: [
		MainComponent,
		NavComponent,
		FooterComponent
	],
	imports: [
		RouterModule.forChild(routes),
		FontAwesomeModule,
		CommonModule
	],
	exports: [
		RouterModule
	]
})
export class MainModule { }