import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Athlete } from './Models/athlete';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
loggingIn:boolean=false; 
  




constructor(){
  
}

loginStatus(logStatus:boolean){
  this.loggingIn = logStatus;
}



athlete: Array<Athlete> = [];



  userStatus(userEvent:Array<Athlete>){
    
    this.athlete = userEvent;
  }

  
  



  
}
