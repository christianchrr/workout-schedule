import { Component, Input, OnInit } from '@angular/core';

import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/myhttp/athlete.service';


@Component({
  selector: 'app-all-athletes',
  templateUrl: './all-athletes.component.html',
  styleUrls: ['./all-athletes.component.css']
})
export class AllAthletesComponent implements OnInit {

  constructor(private _allusers:AthleteService) { }
  athletes: Array<Athlete>=[];
  coaches: Array<Athlete>=[];
  displayedColumns: String[] = ['role', 'first', 'last', 'email']
 

  ngOnInit(): void {
    console.log("ngOnInit");
    this._allusers.GetAthletes().subscribe((data:any)=>{
      this.athletes=data;  
      console.log(data)    
  })
    this._allusers.GetCoaches().subscribe((data:any)=>{
      this.coaches=data;
    })
  }



}
