import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  type:boolean=true;
  typeUsr: string= "Athlete"
  title: any;

  changeT(){
    this.type=!this.type;
  }
  changeUrA(){
    this.typeUsr = "Coach";
  }
  changeUrC(){
    this.typeUsr = "Athlete";
  }
  
loggingIn:any;

  loginStatus(logStatus:boolean){
    this.loggingIn = this.loginStatus;
  }
  
}
