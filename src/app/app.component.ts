import { Component } from '@angular/core';
import { Athlete } from './Models/athlete';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
loggingIn:boolean=false; 
  


stuffArr: Array<Athlete> = [];




  loginStatus(logStatus:boolean){

    this.loggingIn = logStatus;
    console.log(this.loggingIn+" inside appComponent");
  }






  
  constructor(
    private _navbarService:NavbarService
  ){}
  getSubstance(){
    
    console.log("hey i am a substance");

    this._navbarService.getStuff().subscribe((data:any)=>{
      console.log(JSON.stringify(data)+" this is the stuff value that david wanted me to put in");
      console.log(data  );
      this.stuffArr = data;
      console.log(this.stuffArr);
      console.log("did it work ")
    });
  }
  
}
