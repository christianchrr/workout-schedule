import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/Models/athlete';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private testHttp: NavbarService) { }
athletes: Athlete| any;
  ngOnInit(): void {
    this.testHttp.GetUser().subscribe(data=>{
              this.athletes = data;
    })
  }

  view:boolean=true;

  changeView(){
    this.view = !this.view;
  }

  throughHere:any=true;

  through(throughStatus:any){
    this.throughHere = this.through;
  }

}
