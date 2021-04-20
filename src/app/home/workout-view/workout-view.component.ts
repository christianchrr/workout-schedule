import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/Models/athlete';
import { Workout } from 'src/app/Models/workout';
import { AthleteService } from 'src/app/services/athlete.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.css']
})
export class WorkoutViewComponent implements OnInit {

  constructor(private _allusers:AthleteService,
    private workoutservice:WorkoutService,
    private _user:NavbarService) { }
  workouts: Array<Workout> = [];
  displayedColumns: String[] = ['day', 'workout']

  user:Athlete={email:"",fname:'',lname:"",password:"",role:""};

  userIsCoach:boolean= false;
 
  ngOnInit(): void {
    this.workoutservice.GetWorkouts().subscribe((data:any)=>{
      this.workouts=data;
    })

    this.user = this._user.getUser()[0];

    if(this.user.role == "coach"){
      this.userIsCoach = true;
    }
  }

}
