import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Athlete } from '../Models/athlete';
import { NavbarService } from '../services/navbar.service';

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

  athletes: any;
    ngOnInit(): void {
  }

  @Output() loginEvent = new EventEmitter();
  userLog:boolean=false;


  @Output() userEvent = new EventEmitter();

  login(){
   this.testHttp.GetUserLogin(this.eM,this.pW).subscribe((data:any)=>{
      this.athletes=data;
      if(this.athletes.length>0){
        this.testHttp.setUser(this.athletes);
        this.userLog=true;
        this.loginEvent.emit(this.userLog)
        this.userEvent.emit(this.athletes)
      }
   })
  
  }




}
