import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { colors } from '../calendar-utils/colors';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsCalendarComponent implements OnInit {

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 5),
      end: addHours(startOfDay(new Date()), 6),
      title: 'Event 1',
      color: colors.red
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      end: addHours(startOfDay(new Date()), 10),
      title: 'Event 2',
      color: colors.red
    },
    {
      start: addHours(startOfDay(new Date()), 12),
      end: addHours(startOfDay(new Date()), 13),
      title: 'Event 3',
      color: colors.red
    },
    {
      start: addHours(startOfDay(addDays(new Date(), 1)), 2),
      end: addHours(startOfDay(addDays(new Date(), 1)), 18),
      title: 'Event 4',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 5',
      color: colors.blue
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
