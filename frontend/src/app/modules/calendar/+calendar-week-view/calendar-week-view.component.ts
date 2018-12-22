import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-calendar-week-view',
	template: `
		<div class="calendar__week" *ngFor="let day of days">

			<div class="calendar__week--header" [class.cal-weekend]="isWeekend(day)" [class.cal-today]="isToday(day)">
				<div class="calendar__week--number">
					{{ day.getDate() }}
				</div>
				<div class="calendar__week--month">
					{{ getMonthName(day.getMonth()) }}
				</div>
				<div class="calendar__week--day">
					{{ day | date:"EEEE" }}
				</div>
			</div>

			<div class="calendar__week--events">
				<ng-container *ngFor="let event of events">
					<div class="calendar__week--event" *ngIf="compareEventDay(event.start, day)">
						<b>{{ event.show_title }}</b>
						{{ event.title }}
						S{{ event.season }}
						E{{ event.number }}
					</div>
				</ng-container>
			</div>
		</div>
	`,
	styleUrls: ['./calendar-week-view.component.scss']
})
export class CalendarWeekViewComponent {
	@Input() viewDate: Date;

	@Input() events: any;


	

	// Weekends ( mark with class )
	// Current day ( mark with class )
	// [class.cal-today]="day.isToday"
	// [class.cal-weekend]="day.isWeekend"

	days: any;
	ngOnChanges() {
		this.days = this.getFullWeek(this.viewDate);
	}



	getFullWeek(current: Date) {
		var temp = new Date(current.getTime());
		var week = [];
		// Starting Monday not Sunday 
		var first = temp.getDate() - temp.getDay() + (temp.getDay() === 0 ? -6: 1);
		temp.setDate(first);
		for (var i = 0; i < 7; i++) {
			week.push(new Date(+temp));
			temp.setDate(temp.getDate()+1);
		}
		return week;
	}


	getMonthName(month: number) {
		var tt: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return tt[month];
	}

	// Compare event with day
	compareEventDay(event: Date, day: Date) {
		return this.compareDays(event, day);
	}


	isToday(day: Date) {
		var today = new Date();
		return this.compareDays(today, day);
	}

	compareDays(day1: Date, day2: Date) {
		return day1.getFullYear() === day2.getFullYear() && day1.getMonth() === day2.getMonth() && day1.getDate() === day2.getDate();
	}


	isWeekend(day: Date) {
		if(day.getDay() === 0) {
			return true;
		}
	}
}
