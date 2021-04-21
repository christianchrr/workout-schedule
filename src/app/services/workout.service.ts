import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CompleteWorkout } from '../Models/complete-workout';

import { Workout } from '../Models/workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  baseurl = 'http://localhost:8086/api/v1/';

  constructor(private http:HttpClient) { }

  GetWorkouts(): Observable<Workout> {
    return this.http.get<Workout>(this.baseurl+"workouts")
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.baseurl+"workouts/add", workout)   
  }

  updateWorkout(workout:object): Observable<Workout> { 
    return this.http.put<Workout>(this.baseurl+"workouts/update",workout).pipe(
      catchError(this.errorHandl)
    )
  }

  // ----------------------------

  addCompletedWorkout(
    cworkout:CompleteWorkout
    ): Observable<CompleteWorkout> {
    return this.http.post<CompleteWorkout>(this.baseurl+"users/submitcw", cworkout)   
  }

  getAllCompletedWorkouts(email:string): Observable<Array<CompleteWorkout>> {
    return this.http.get<Array<CompleteWorkout>>(this.baseurl+ "compworkouts/"+email);
  }

  // ----------------------------
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
