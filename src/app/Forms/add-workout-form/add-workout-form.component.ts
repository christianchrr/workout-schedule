import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from 'src/app/Models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-add-workout-form',
  templateUrl: './add-workout-form.component.html',
  styleUrls: ['./add-workout-form.component.css']
})
export class AddWorkoutFormComponent implements OnInit {

  workout = new Workout('','')

  constructor(private http:WorkoutService, private router:Router) { }

  ngOnInit(): void {
  }

  submitWorkout() {
    this.http.addWorkout(this.workout).subscribe((data:any)=>{
        this.workout=data;
        this.router.navigate(['workout-view'])
    })
  }

}
