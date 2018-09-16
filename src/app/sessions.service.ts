import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from './session';
import { SESSIONSLIST } from './mock-sessions-list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
* Service responsible for performing operations on GHC sessions
*/
@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private getSessionsUrl = 'https://liks2l9a0b.execute-api.us-east-1.amazonaws.com/Stage/ghcsessions';
  private updateSessionsBaseUrl = 'https://q4fhvualcc.execute-api.us-east-1.amazonaws.com/Stage/ghcsessions/';

  constructor(private http: HttpClient) { }

  /**
  * Get all GHC Sessions from the server
  */
  getSessions(): Observable<Session[]> {
    // console.log(this.httpOptions);
    // return this.http.get<Session[]>(this.getSessionsUrl).pipe(
    //   tap(sessions => this.log('fetched sessions')),
    //   catchError(this.handleError('getSessions', []))
    // );
    console.log("returning");
    console.log(SESSIONSLIST)
    return of(SESSIONSLIST);
  }

  /**
  * Update the GHC Session in question to add it to or remove it from
  * the calendar
  * @param sessionId - identifier of the session being updated
  * @param isSelected - whether we are adding or removing the session from
  * the calendar
  */
  updateSession(sessionId: number, isSelected: boolean): Observable<any> {
    const updateInfo = {
      isSelected: isSelected ? 1 : 0
    };

    return this.http.put(this.updateSessionsBaseUrl + sessionId, updateInfo,
      httpOptions).pipe(
        tap(_ => console.log(`updated session id=${sessionId}`)),
        catchError(this.handleError<any>('updateSession'))
    );
  }

  /**
  * Handle Http operation that failed. Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(`${operation} failed: ${error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
  * Logs a message. Currently using the console.
  * Could log by sending it to the server instead.
  * @param message - the message being logged
  */
  private log(message: string): void {
    console.log(message);
  }

}
