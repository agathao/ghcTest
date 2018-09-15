import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EventsListItem } from '../eventsListItem';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarEvents: EventsListItem[];

  constructor(private eventsService: EventsService) { }

  getCalendarEvents(): void {
    this.eventsService.getCalendarEvents()
     .subscribe(calendarEvents => this.calendarEvents = calendarEvents);
  }

  ngOnInit() {
    this.getCalendarEvents();
  }

}
