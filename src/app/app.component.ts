import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
loggingIn:any=false;

  loginStatus(logStatus:boolean){

    this.loggingIn = logStatus;
    console.log(this.loggingIn+" inside appComponent");
  }
  
}
