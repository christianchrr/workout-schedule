import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Athlete } from '../Models/athlete';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

eM:string="";
pW:string="coachpass";

loginWarn:string="";

  constructor(private testHttp: NavbarService) { }
athletes: Array<Athlete>=[];
  ngOnInit(): void {
  }


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
    console.log(this.typeUsr);
  }

  
  @Output() loginEvent = new EventEmitter();
  userLog:boolean=false;


  @Output() userEvent = new EventEmitter();

  login(){
   this.testHttp.GetUserLogin(this.eM,this.pW).subscribe((data:any)=>{
       this.athletes=data;
       console.log("data")
       console.log(data)
      if(this.athletes.length>0){
        this.testHttp.setUser(this.athletes);
        this.userLog=true;
        this.loginEvent.emit(this.userLog)
        this.userEvent.emit(this.athletes)
      }
   })
  
  }



  // login(){
  //   this.testHttp.GetUserLogin(this.eM, this.pW).subscribe(data=>{
  //                   if(data != null){
  //                     console.log(typeof(data)+" inside http test");}})
  //                  console.log(this.athletes +" inside login()");
  //   if(this.athletes!=null){
  //   this.userLog=true;
  //   this.loginEvent.emit(this.userLog)
  //   console.log(this.userLog+" inside loginComponent");
  // }
  // }

}
