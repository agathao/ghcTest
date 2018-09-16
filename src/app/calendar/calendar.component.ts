import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';
import { SessionsByDay } from '../sessionsByDay';
import { Session } from '../session';
import SessionUtil from '../shared/session-util';

/**
* Component responsible for constructing the view of sessions that have been
* added to the user's calendar
*/
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarEvents: SessionsByDay[];

  constructor(private sessionsService: SessionsService) { }

  /**
  * Component responsible for retrieving and setting the events currently
  * in the calendar
  */
  getCalendarEvents(): void {
    this.sessionsService.getSessions()
     .subscribe(sessions => this.filterSessionsInCalendar(sessions));
  }

  /**
  * Filter sessions depending on whether or not they are in the calendar
  * @param sessions - the sessions to be filtered
  */
  filterSessionsInCalendar(sessions: Session[]): void {
    var filteredSessions = sessions.filter(session => session.isSelected);

    //Group sessions by the day when they occur, ignoring the time
    var sessionsByDay = sessions.reduce((obj, session) =>
      SessionUtil.groupSessions(obj, session), {});

    //Create SessionsByDay and sort sessions
    var sortedSessions: SessionsByDay[] = Object.keys(sessionsByDay)
     .map((key) => SessionUtil.sortGroupedSessions(key, sessionsByDay));

    this.calendarEvents = sortedSessions;
  }

  /**
  * Upon initialization, retrieve the sessions that are in the calendar for
  * display
  */
  ngOnInit() {
    this.getCalendarEvents();
  }

}
