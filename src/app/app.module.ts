import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { CalendarUtilsModule } from './calendar-utils/module';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { LimitToPipe }   from './limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventsListComponent,
    EventsCalendarComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    CalendarUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
