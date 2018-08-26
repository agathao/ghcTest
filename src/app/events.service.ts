import { Injectable } from '@angular/core';
import { EventsListItem } from './eventsListItem';
import { EVENTSLIST } from './mock-events-list';
import { CALENDAREVENTSLIST } from './mock-calendar-events-list';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): EventsListItem[] {
    return EVENTSLIST;
  }

  getCalendarEvents(): EventsListItem[] {
    return CALENDAREVENTSLIST;
  }

}
