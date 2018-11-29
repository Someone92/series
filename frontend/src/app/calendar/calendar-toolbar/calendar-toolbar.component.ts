import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-calendar-toolbar',
  template: `
  <div class="calendar-toolbar">
  <div
    (click)="getNextPrevMonth()"
    mwlCalendarPreviousView
    [view]="view"
    [(viewDate)]="viewDate">
    <fa-icon [icon]="angleLeft"></fa-icon>{{monthNamePrev}}
  </div>
  <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>
  
  <div
    (click)="getNextPrevMonth()"
    mwlCalendarNextView
    [view]="view"
    [(viewDate)]="viewDate">
    {{monthNameNext}}<fa-icon [icon]="angleRight"></fa-icon>
    
  </div>
</div>
  `,
  styleUrls: ['./calendar-toolbar.component.sass']
})
export class CalendarToolbarComponent {
  /**
   * The current view
   */
  @Input()
  view: string;

  /**
   * The current view date
   */
  @Input()
  viewDate: Date;

  /**
   * Called when the view date is changed
   */
  @Output()
  viewDateChange: EventEmitter<Date> = new EventEmitter();
  
	angleLeft = faAngleDoubleLeft;
  angleRight = faAngleDoubleRight;
  
  monthNameNext: string;
	monthNamePrev: string;

  ngOnInit() {
    console.log(this.viewDate);
    this.getNextPrevMonth();
  }

	getNextPrevMonth() {
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
    this.viewDateChange.emit(this.viewDate);    
	}
}
