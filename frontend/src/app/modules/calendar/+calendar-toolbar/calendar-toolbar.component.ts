import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { CalendarView } from 'angular-calendar';
@Component({
	selector: 'app-calendar-toolbar',
	template: `
		<div class="calendar__toolbar">
			<div class="calendar__toolbar--change">
				<span
					(click)="getNextPrev()"
					mwlCalendarPreviousView
					[view]="view"
					[(viewDate)]="viewDate">
					<fa-icon [icon]="angleLeft"></fa-icon>{{monthNamePrev}}
				</span>
				<span
					(click)="getNextPrev()"
					mwlCalendarNextView
					[view]="view"
					[(viewDate)]="viewDate">
					{{monthNameNext}}<fa-icon [icon]="angleRight"></fa-icon>
				</span>
			</div>
			<h3 class="calendar__toolbar--date">{{ viewDate | calendarDate:(view + 'ViewTitle'):weekStartsOn:1 }}</h3>

			<div class="calendar__toolbar--view">
				<span (click)="montertest($event.currentTarget.innerText)" [ngClass]="{active: view==='week'}">Week</span>
				<span (click)="montertest($event.currentTarget.innerText)" [ngClass]="{active: view==='month'}">Month</span>
			</div>
		</div>
	`,
	styleUrls: ['./calendar-toolbar.component.scss']
})
export class CalendarToolbarComponent implements OnInit {
	/**
	 * The current view
	 */
	@Input() view: CalendarView;

	@Output() viewChange: EventEmitter<CalendarView> = new EventEmitter();


	montertest(value: string) {
		console.log(value);
		if(value == 'Month') {
			this.view = CalendarView.Month;
		} else {
			this.view = CalendarView.Week;
		}
		
		this.viewChange.emit(this.view);
		this.getNextPrev();
	}

	/**
	 * The current view date
	 */
	@Input() viewDate: Date;

	/**
	 * Called when the view date is changed
	 */
	@Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

	angleLeft = faAngleDoubleLeft;
	angleRight = faAngleDoubleRight;

	monthNameNext: string;
	monthNamePrev: string;

	ngOnInit() {
		this.getNextPrev();
	}
	
	getNextPrev() {
		console.log((this.viewDate.getMonth()+1)%12 + 1);
		if(this.view === "week") {
			this.monthNameNext = 'Next';
			this.monthNamePrev = 'Previous';
		} else {
			console.log('wTF');
			let monthNumber = this.viewDate.getMonth();
			var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];

			if(monthNumber == 0) {
				// Prev month is December
				this.monthNameNext = monthNames[monthNumber + 1];
				this.monthNamePrev = monthNames[11];
			} else if(monthNumber == 11) {
				// Next month is January
				this.monthNameNext = monthNames[0];
				this.monthNamePrev = monthNames[monthNumber - 1];
			} else {
				this.monthNameNext = monthNames[monthNumber + 1];
				this.monthNamePrev = monthNames[monthNumber - 1];
			}
		}
		this.viewDateChange.emit(this.viewDate);
	}
}
