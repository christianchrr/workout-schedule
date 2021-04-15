import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarService } from '../../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loggPass(x:boolean){
    x!=x;
  }
  pagedLogged:any;
  constructor() { 
  
  
  }


  ngOnInit(): void {
  }
  
  @Output() throughNav = new EventEmitter();
  userLog:boolean=false;

  login(){
    this.throughNav.emit(this.userLog)
  }

}
