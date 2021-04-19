import { Component, Input, OnInit } from '@angular/core';

import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/myhttp/athlete.service';
import { NavbarService } from 'src/app/navbar.service';


@Component({
  selector: 'app-all-athletes',
  templateUrl: './all-athletes.component.html',
  styleUrls: ['./all-athletes.component.css']
})
export class AllAthletesComponent implements OnInit {

  constructor(private _allusers:AthleteService,
              private _user:NavbarService) { }
  athletes: Array<Athlete>=[];
  coaches: Array<Athlete>=[];
  displayedColumns: String[] = ['role', 'first', 'last', 'email']
 
  user:Athlete={email:"",fname:'',lname:"",password:"",role:""};

  userIsCoach:boolean= false;

  ngOnInit(): void {
    this._allusers.GetAthletes().subscribe((data:any)=>{
      this.athletes=data;  
  })
    this._allusers.GetCoaches().subscribe((data:any)=>{
      this.coaches=data;
    })

    this.user = this._user.getUser()[0];

    if(this.user.role="coach"){
      this.userIsCoach = true;
    }

  }
  
  

}
