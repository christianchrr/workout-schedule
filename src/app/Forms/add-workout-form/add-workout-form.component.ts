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

  newWorkout = new Workout('','')
  workoutUpdate:Workout={workout:'',day:''};

  workout:string=this.workoutUpdate.workout;   
  day:string=this.workoutUpdate.day; 

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
    this.workoutUpdate = {workout:this.workout,day:this.day}
    this.http.updateWorkout(this.workoutUpdate).subscribe((data:any)=>{
      this.workoutUpdate=data;
    });
  }

}
