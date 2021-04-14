import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

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
