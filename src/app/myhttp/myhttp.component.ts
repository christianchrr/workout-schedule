import { Component, OnInit } from '@angular/core';
import { AthleteService } from './athlete.service';
import { Athletes } from './Athletes';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {

  constructor(private athleteService : AthleteService){}
  athletes : Athletes | any;
  ngOnInit(){
      this.athleteService.GetAthletes()
          .subscribe(data =>{
                this.athletes = data;
          }
      );
  } 

}
