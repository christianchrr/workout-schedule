import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Athlete } from '../Models/athlete';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private https:HttpClient) { }

  baseurl = "http://localhost:8086/api/v1/getdetails"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  sendEmail(athlete:Athlete) : Observable<Athlete>{
        return this.https.post<Athlete>(this.baseurl, athlete);
  }
}
