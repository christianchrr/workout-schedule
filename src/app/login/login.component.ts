import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

  login(){
    this.userLog=true;
    this.loginEvent.emit(this.userLog)
  }

}
