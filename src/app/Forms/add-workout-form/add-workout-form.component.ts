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

  newWorkout = new Workout(0,'','')
  workoutUpdate:Workout={id:0,day:'', workout:''};

  id:number=this.workoutUpdate.id
  workout:string=this.workoutUpdate.workout;   
  
weekdays:string[]=[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

  

  constructor(private http:WorkoutService, private router:Router) { }

  ngOnInit(): void {
  }

  submitWorkout() {
    this.http.addWorkout(this.newWorkout).subscribe((data:any)=>{
        this.newWorkout=data;
        this.router.navigate(['workout-view'])
    })
  }

  update(){
    console.log(this.id);
    console.log(this.weekdays[(this.id) - 1]);
    console.log(this.workout);
    this.workoutUpdate = {id:this.id, day:this.weekdays[(this.id)-1], workout:this.workout}
    this.http.updateWorkout(this.workoutUpdate).subscribe((data:any)=>{
      this.workoutUpdate=data;
    });
  }

}
