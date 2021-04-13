import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

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
  constructor(private navigation:NavbarService) { 
  this.pagedLogged=this.loggPass(navigation.logged);
  
  }


  ngOnInit(): void {
  }
  
 

}
