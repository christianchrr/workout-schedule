import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  type:boolean=true;
  typeUsr: string= "Athlete"

  changeT(){
    this.type=!this.type;
  }
  changeUrA(){
    this.typeUsr = "Coach";
  }
  changeUrC(){
    this.typeUsr = "Athlete";
  }

  
}
