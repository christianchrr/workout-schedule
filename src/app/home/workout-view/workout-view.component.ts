import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/services/athlete.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.css']
})
export class WorkoutViewComponent implements OnInit {

  constructor(private _allusers:AthleteService,
              private _user:NavbarService) { }
  coaches: Array<Athlete>=[];
  displayedColumns: String[] = ['day', 'workout']

  user:Athlete={email:"",fname:'',lname:"",password:"",role:""};

  userIsCoach:boolean= false;
 
  ngOnInit(): void {
    this._allusers.GetCoaches().subscribe((data:any)=>{
      this.coaches=data;
    })

    this.user = this._user.getUser()[0];

    if(this.user.role == "coach"){
      this.userIsCoach = true;
    }
  }

}
