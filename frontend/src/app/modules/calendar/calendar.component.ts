import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { CalendarService } from '@services/calendar.service';
import { CalendarView } from 'angular-calendar';


@Component({
	selector: 'app-calendar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [DatePipe]
})
export class CalendarComponent implements OnInit {
	angleLeft = faAngleDoubleLeft;
	angleRight = faAngleDoubleRight;

	private title = 'Calendar - Wiking';

	constructor(private titleService: Title,
				private calendarService: CalendarService,
				private datePipe: DatePipe) {
		this.titleService.setTitle(this.title);
	}
	
	view: CalendarView = CalendarView.Week;
	CalendarView = CalendarView;

	viewDate: Date = new Date();
	viewDateOld = this.viewDate;


	events$: Observable<Array<any>>;
	
	viewDateChangedHandler(date) {
		this.viewDateOld = this.viewDate;
		console.log('------------------------');
		console.log('CurrentView: ', date.getMonth());
		console.log('ViewdateOld: ', this.viewDateOld.getMonth());
		console.log('------------------------');
		if(date.getMonth() !== this.viewDateOld.getMonth()) {
			let convertedDate = this.datePipe.transform(date, 'y-M-d').toString();
			this.events$ = this.calendarService.getFullMonth(convertedDate);
		}

	}

	ngOnInit() {
		let convertedDate = this.datePipe.transform(this.viewDate, 'y-M-d').toString();
		this.events$ = this.calendarService.getFullMonth(convertedDate);
	}

}
