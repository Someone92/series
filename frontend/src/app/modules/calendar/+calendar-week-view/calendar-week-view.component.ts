import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-week-view',
  template: `
    {{ viewDate | json }}

    <div *ngFor="let day of days">
      {{ day }}
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


  // Map events to week day
  // Output into html
  // Update on week change

  days: any;
  constructor() { }

  ngOnInit() {
    console.log(this.events);

    console.log(this.dates(this.viewDate));
    this.days = this.dates(this.viewDate);
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.days = this.dates(this.viewDate);
  }


  dates(current) {
    var temp = new Date(current.getTime());
    var week = [];
    // Starting Monday not Sunday 
    var first = temp.getDate() - temp.getDay() + 1;
    temp.setDate(first);
    for (var i = 0; i < 7; i++) {
      week.push(new Date(+temp));
      temp.setDate(temp.getDate()+1);
    }
    return week;
  }
}
