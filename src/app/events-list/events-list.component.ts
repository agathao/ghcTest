import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EventsListItem } from '../eventsListItem';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: EventsListItem[];

  constructor(private eventsService: EventsService) {
  }

  getEventsList(): void {
    this.events = this.eventsService.getEvents();
  }

  ngOnInit() {
    this.getEventsList();
  }

}
