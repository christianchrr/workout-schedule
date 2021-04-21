import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/services/athlete.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-all-athletes',
  templateUrl: './all-athletes.component.html',
  styleUrls: ['./all-athletes.component.css']
})
export class AllAthletesComponent implements OnInit {

  constructor(private _allusers:AthleteService,private _user:NavbarService, private router:Router) { }
  athletes: Array<Athlete>=[];
  coaches: Array<Athlete>=[];
  displayedColumns: String[] = ['role', 'first', 'last', 'email']
 
  user:Athlete={email:'',fname:'',lname:'',password:'',role:''};

  selectedIndividual: any = {}

  userIsCoach:boolean= false;

  ngOnInit(): void {
    this._allusers.GetAthletes().subscribe((data:any)=>{
      this.athletes=data 
  })
    this._allusers.GetCoaches().subscribe((data:any)=>{
      this.coaches=data
    })
    
    this.user = this._user.getUser()[0];

    if(this.user.role == "coach"){
      this.userIsCoach = true
    }
  }
  
  profile(email: string) {
    this._allusers.findByEmail(email).subscribe((data:any)=>{
      this.selectedIndividual = data
      console.log(this.selectedIndividual)
    })
  }

}
