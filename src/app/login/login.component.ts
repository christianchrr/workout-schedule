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

eM:string="tevin.gray@revature.net";
pW:string="password";

loginWarn:string="";

  constructor(private testHttp: NavbarService) { }
athletes: any;
  ngOnInit(): void {
  }

  @Output() loginEvent = new EventEmitter();
  userLog:boolean=false;


  @Output() userEvent = new EventEmitter();

  login(){
   this.testHttp.GetUserLogin(this.eM,this.pW).subscribe(data=>{
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




}
