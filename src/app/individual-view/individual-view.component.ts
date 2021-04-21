import { Component, OnInit } from '@angular/core';
import { Athlete } from '../Models/athlete';
import { CompleteWorkout } from '../Models/complete-workout';
import { NavbarService } from '../services/navbar.service';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.css']
})
export class IndividualViewComponent implements OnInit {

  selectedUser:Athlete={email:"",fname:'',lname:"",password:"",role:""};

  constructor(private _user:NavbarService,
              private _workouts:WorkoutService) { }

  workouts: Array<CompleteWorkout> = [];
  displayedColumns: String[] = ['day', 'workout', 'comments']


  ngOnInit(): void {
    this.selectedUser = this._user.getSelectedUser();

    this._workouts.getAllCompletedWorkouts(this.selectedUser.email).subscribe(data => {
      this.workouts=data;
      console.log(data);
    })
  }

}
