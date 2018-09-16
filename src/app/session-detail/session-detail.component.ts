import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Session } from '../session';

/**
* Component responsible for displaying the detailed view of a session
*/
@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent {
  session: Session;

  constructor(public activeModal: NgbActiveModal) {}

}
