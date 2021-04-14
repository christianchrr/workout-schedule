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

  @Output() loginEvent = new EventEmitter();
  userLog:boolean=false;
login(){
  this.userLog=true;
  this.loginEvent.emit(this.userLog)
}

}
