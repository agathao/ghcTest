import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionsService } from '../sessions.service';
import { SessionDetailComponent } from '../session-detail/session-detail.component';
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

  constructor(private sessionsService: SessionsService,
    private modalService: NgbModal) { }

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

  /**
  * Open the detailed view of a session
  * @param session - the session for which the detailed view will be displayed
  */
  openSessionDetails(session: Session): void {
    const modalRef = this.modalService.open(SessionDetailComponent);
    modalRef.componentInstance.session = session;
  }

}
