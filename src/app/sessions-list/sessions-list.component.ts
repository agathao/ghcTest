import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionsService } from '../sessions.service';
import { SessionDetailComponent } from '../session-detail/session-detail.component';
import { SessionsByDay } from '../sessionsByDay';
import { Session } from '../session';
import SessionUtil from '../shared/session-util';

/**
* Component responsible for the logic to display the list of GHC sessions
*/
@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {
  sessionsByDay: SessionsByDay[];

  constructor(private sessionsService: SessionsService,
    private modalService: NgbModal) {
  }

  /**
  * Get all GHC Sessions from the service and group them as needed
  */
  getAllSessions(): void {
    this.sessionsService.getSessions()
     .subscribe(sessions => {

       //Group sessions by the day when they occur, ignoring the time
       var sessionsByDay = sessions.reduce((obj, session) =>
         SessionUtil.groupSessions(obj, session), {});

       //Create SessionsByDay and sort sessions
       var sortedSessions: SessionsByDay[] = Object.keys(sessionsByDay)
        .map((key) => SessionUtil.sortGroupedSessions(key, sessionsByDay));

       this.sessionsByDay = sortedSessions;
     });
  }

  /**
  * Upon initialization, retrieve all the sessions for display
  */
  ngOnInit() {
    this.getAllSessions();
  }

  /**
  * Open the detailed view of a session
  * @param session - the session for which the detailed view will be displayed
  */
  openSessionDetails(session: Session): void {
    const modalRef = this.modalService.open(SessionDetailComponent);
    modalRef.componentInstance.session = session;
  }

  /**
  * Scrolls the window back to the workshopDescription element
  */
  onScrollToTop(): void {
    window.document.getElementById('workshopDescription').scrollIntoView();
  }

  /**
  * Adds the session to the calendar and refreshes the page
  * @param sessionId - the if of the session being added to the calendar
  */
  addToCalendar(sessionId: number): void {
    this.sessionsService.updateSession(sessionId, true)
     .subscribe(() => console.log('updated'));
  }

  /**
  * Removes the session from the calendar and refreshes the page
  * @param sessionId - the if of the session being removed from the calendar
  */
  removeFromCalendar(sessionId: number): void {
    this.sessionsService.updateSession(sessionId, false)
     .subscribe(() => console.log('updated'));
  }
}
