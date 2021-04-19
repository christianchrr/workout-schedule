import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/Models/athlete';
import { AthleteService } from 'src/app/myhttp/athlete.service';

@Component({
  selector: 'app-workout-view',
  templateUrl: './workout-view.component.html',
  styleUrls: ['./workout-view.component.css']
})
export class WorkoutViewComponent implements OnInit {

  constructor(private _allusers:AthleteService) { }
  coaches: Array<Athlete>=[];
  displayedColumns: String[] = ['day', 'workout']
 
  ngOnInit(): void {
    this._allusers.GetCoaches().subscribe((data:any)=>{
      this.coaches=data;
    })
  }

}
