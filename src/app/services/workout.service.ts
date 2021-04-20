import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Workout } from '../Models/workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  baseurl = 'http://localhost:8086/api/v1/';

  constructor(private http:HttpClient) { }

  GetWorkouts(): Observable<Workout> {
    return this.http.get<Workout>(this.baseurl+"/workouts")
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.baseurl+"/workouts/add", workout)   
  }

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
