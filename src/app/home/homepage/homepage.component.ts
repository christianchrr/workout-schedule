import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Athlete } from 'src/app/Models/athlete';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private testHttp: NavbarService) { }

  athlete: Array<Athlete> = [];
  @Input() userTransfer: Array<Athlete> | any;

  view:boolean=false;

  ngOnInit(): void {
        // this.athlete = this.userTransfer;
        // if(this.athlete[0].role == "coach"){
         
        //   this.view=false;
       
        // }
  }



  
}
