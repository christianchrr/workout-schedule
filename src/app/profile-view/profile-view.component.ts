import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Athlete } from '../Models/athlete';
import { CompleteWorkout } from '../Models/complete-workout';
import { AthleteService } from '../services/athlete.service';
import { NavbarService } from '../services/navbar.service';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(private _user:NavbarService,
    private _update:AthleteService,
    private router:Router,
    private _workouts:WorkoutService) { }

  user:Athlete={email:"",fname:'',lname:"",password:"",role:""};

      
  email:string=this.user.email;   
  fname:string=this.user.fname; 
  lname:string=this.user.lname; 
  password:string=this.user.password;
  role:string = this.user.role;

  workouts: Array<CompleteWorkout> = [];
  displayedColumns: String[] = ['day', 'workout', 'comments']
  

  ngOnInit(): void {
    this.user = this._user.getUser()[0];

    this.email=this.user.email;   
    this.fname=this.user.fname; 
    this.lname=this.user.lname; 
    this.password=this.user.password;
    this.role = this.user.role;


    this._workouts.getAllCompletedWorkouts(this.user.email).subscribe(data => {
      this.workouts=data;
      console.log(data);
    })
  }
  
  changeInfoView:boolean=false;

  changeInfo(){
    this.changeInfoView = !this.changeInfoView;
  }

  update(){
    this.user = {email:this.email,fname:this.fname,lname:this.lname,password:this.password,role:this.user.role}
    this._update.UpdateUser(this.user).subscribe((data:any)=>{
      this.user=data;
      let x:Array<Athlete>=[this.user];
      this._user.setUser(x);
      this.changeInfo();
    });
  }

}
