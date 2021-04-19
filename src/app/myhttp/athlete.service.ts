import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Athlete } from '../Models/athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  baseurl = 'http://localhost:8086/api/v1/';

  constructor(private http: HttpClient) { }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
   // GET
   GetAthletes(): Observable<Athlete> {
    return this.http.get<Athlete>(this.baseurl+"role/athlete")
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetCoaches(): Observable<Athlete> {
    return this.http.get<Athlete>(this.baseurl + "role/coach")
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  UpdateUser(newUser:object): Observable<Athlete> {
   
    return this.http.put<Athlete>(this.baseurl+"updateuser",newUser).pipe(
      catchError(this.errorHandl)
    )
  }

  addAthlete(user: object): Observable<object> {
    return this.http.post(this.baseurl+"adduser", user)   
  }

  findByEmail(email: any): Observable<any> {
    return this.http.post(this.baseurl+`/email/${email}`, email)   
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
