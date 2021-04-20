import { Component, OnInit } from '@angular/core';
import { Athlete } from '../Models/athlete';
import { AthleteService } from './athlete.service';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {

  constructor(private athleteService : AthleteService){}
  athletes : Athlete | any;
  ngOnInit(){
      this.athleteService.GetAthletes()
          .subscribe(data =>{
                this.athletes = data;
          }
      );
  } 

}
