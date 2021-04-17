import { Component, OnInit } from '@angular/core';

import { Athlete } from 'src/app/Models/athlete';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-all-athletes',
  templateUrl: './all-athletes.component.html',
  styleUrls: ['./all-athletes.component.css']
})
export class AllAthletesComponent implements OnInit {

  constructor(private _allusers:NavbarService) { }
  athletes: Array<Athlete>=[];

 
 

  ngOnInit(): void {
    this._allusers.GetUser().subscribe((data:any)=>{
      console.log(data);
      this.athletes=data;
  })
  }




  getInfo(){
    this._allusers.GetUser().subscribe((data:any)=>{
      console.log(data);
  })
  }
}
