import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor() { }

  ngOnInit() {
    this.events = [ {
      day: "Wednesday",
      events: [
        {
          name: "Sample Event 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: false
        },
        {
          name: "Sample Event 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: true
        },
        {
          name: "Sample Event 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: false
        },
        {
          name: "Sample Event 4",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: false
        },
        {
          name: "Sample Event 5",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: false
        },
        {
          name: "Sample Event 6",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: true
        }
      ]
    },

    {
      day: "Thursday",
      events: [
        {
          name: "Sample Event 7",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am"
        },
        {
          name: "Sample Event 8",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am"
        },
        {
          name: "Sample Event 9",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: true
        },
        {
          name: "Sample Event 10",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: true
        },
        {
          name: "Sample Event 11",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          time: "09:00am - 09:20am",
          inCalendar: true
        }
      ]
    }
  ];
  }

}
