import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Athletes } from './Athletes';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  baseurl = 'http://localhost:3000/athletes/';

  constructor(private http: HttpClient) { }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
   // GET
   GetAthletes(): Observable<Athletes> {
    return this.http.get<Athletes>(this.baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetAthlete(id: any): Observable<Athletes> {
    return this.http.get<Athletes>(this.baseurl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
