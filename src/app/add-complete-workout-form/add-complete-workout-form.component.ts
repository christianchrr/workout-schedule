import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleteWorkout } from '../Models/complete-workout';
import { NavbarService } from '../services/navbar.service';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-add-complete-workout-form',
  templateUrl: './add-complete-workout-form.component.html',
  styleUrls: ['./add-complete-workout-form.component.css']
})
export class AddCompleteWorkoutFormComponent implements OnInit {
  [x: string]: any;

   cworkout : CompleteWorkout= {id:null, email:'',day:'',workout:'',comments:''};


  constructor(private _http:WorkoutService, private _user:NavbarService, private router:Router) { }

  ngOnInit(): void {
    this.cworkout.email = this._user.getUser()[0].email
  }

  submitCompleteWorkout() {
    console.log(this.cworkout)


    this._http.addCompletedWorkout(this.cworkout).subscribe((data)=>{
        
        console.log(data)
        this.router.navigate(['profile-view'])
    })
  }

}
