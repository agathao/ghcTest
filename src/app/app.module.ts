import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LimitToPipe } from './limit-to.pipe';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventsListComponent,
    LimitToPipe,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [
    EventDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
