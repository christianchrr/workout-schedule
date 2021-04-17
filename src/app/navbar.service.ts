import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Athlete } from './Models/athlete';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  baseurl = 'http://localhost:8086/api/v1/users';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  GetUserLogin(email:string, password:string): Observable<Athlete>{
    let userJson= this.http.get<Athlete>(this.baseurl+"?email="+email+"&"+"first="+password)
    if(userJson!=Object()){
    console.log(userJson  + " inside getUserLogin Http service")
  }
      return userJson
  }

  GetUser(email:string): Observable<Athlete> {
let userJson = this.http.get<Athlete>(this.baseurl+"?email="+email).pipe(
  retry(1),
catchError(this.errorHandl)
);
    console.log(userJson);
    return userJson
  }

  errorHandl(error:any) {
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
