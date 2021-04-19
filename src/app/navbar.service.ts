import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Athlete } from './Models/athlete';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  baseurl = 'http://localhost:8086/api/v1/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getStuff(): Observable<Athlete>{
    return this.http.get<any>(this.baseurl+'users');
  }

  GetUserLogin(email:string, password:string): Observable<Athlete>{
     
      return this.http.get<any>(this.baseurl+"login/"+email+"/"+password)
      
    }

  GetUser(): Observable<Athlete> {
    return this.http.get<Athlete>(this.baseurl+"/users")   
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
