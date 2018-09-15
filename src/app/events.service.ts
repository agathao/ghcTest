import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './event';
import { EventsListItem } from './eventsListItem';
import { EVENTSLIST } from './mock-events-list';
import { CALENDAREVENTSLIST } from './mock-calendar-events-list';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl = 'https://liks2l9a0b.execute-api.us-east-1.amazonaws.com/Stage/ghcsessions';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return of(EVENTSLIST);
  }

  getCalendarEvents(): Observable<EventsListItem[]> {
    return of(CALENDAREVENTSLIST);
  }

}
