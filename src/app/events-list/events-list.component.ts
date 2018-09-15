import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from '../events.service';
import { EventsListItem } from '../eventsListItem';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  eventsList: EventsListItem[];

  constructor(private eventsService: EventsService,
    private modalService: NgbModal) {
  }

  getEventsList(): void {

    this.eventsService.getEvents()
     .subscribe(events => {

       //group events by the day of the week when they occur
       var groups = events.reduce(function(obj,event){
         const eventDate = new Date(event.startTime);
         const key = eventDate.getDay();

         obj[key] = obj[key] || [];
         obj[key].push(event);

         return obj;
       }, {});

       //Create EventsListItem
       var eventsByDay: EventsListItem[] = Object.keys(groups).map(function(key){
         var item = new EventsListItem();
         item.day = key;
         item.events = groups[key];

         return item;
       });

       this.eventsList = eventsByDay;
     });
  }

  ngOnInit() {
    this.getEventsList();
  }

  openEventDetails(event) {
    const modalRef = this.modalService.open(EventDetailComponent);
    modalRef.componentInstance.event = event;
  }

}
